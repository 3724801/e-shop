using Application.Dtos;
using Domain.Models.Order;
using EShop.API.Models;
using EShop.API.Repository.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace EShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController(ICartRepository _cart, IQueryRepository<Order> _query, ICommandRepository<Order> _cmd, IQueryRepository<Product> _product) : ControllerBase
    {
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<Order>> AddAsync([FromBody] CreateOrderDto dto)
        {
            var userEmail = User.FindFirstValue(ClaimTypes.Email);
            if (dto == null)
            {
                return BadRequest("Order data cannot be null");
            }
            var cart = await _cart.GetCartAsync(dto.CartId);
            if (cart == null)
            {
                return NotFound("Cart not found");
            }
            var items = new List<OrderedItem>();
            foreach (var item in cart.Items)
            {
                var product = await _product.GetAsync(p => p.Id == item.ProductId);
                if (product == null)
                {
                    return NotFound($"Product with ID {item.ProductId} not found");
                }
                var orderedItem = new ProductOrdered
                {
                    ProductID = item.ProductId,
                    ProductName = item.ProductTitle,
                    ProductImage = item.ImageUrl,
                };
                var orderedItemEntity = new OrderedItem
                {
                    ItemOrdered = orderedItem,
                    Price = item.Price,
                    Quantity = item.Quantity
                };
                items.Add(orderedItemEntity);
            }
            var order = new Order
            {
                OrderedItems = items,
                ShippingAddress = dto.ShippingAddress,
                SubTotal = items.Sum(i => i.Price * i.Quantity),
                PaymentSummery =dto.PaymentSummery,
                PaymentIntentId = cart.Id.ToString(),
                BuyerEmail = userEmail ?? string.Empty,
            };
            await _cmd.AddAsync(order);
            return Ok(order);
        }

    }
}
