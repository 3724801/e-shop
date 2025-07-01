using EShop.API.Dtos;
using EShop.API.Features.Cart.Commands;
using EShop.API.Features.Cart.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles = "Client")]
    public class CartController(IMediator _mediator) : ControllerBase
    {
        [HttpGet("{id:guid}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<CartDto>> GetCartById(Guid id)
        {
            var cartDto = await _mediator.Send(new GetCartByIdQuery(id));
            return Ok(cartDto);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdateCart([FromBody] CartDto dto)
        {
            var result = await _mediator.Send(new UpdateCartCommand(dto));
            if (result.Error.type == "CartUpdateFailed")
            {
                return BadRequest(result.Error.description);
            }
            return Ok(result);
        }

        [HttpDelete("{id:guid}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> DeleteCart(Guid id)
        {
            var result = await _mediator.Send(new DeleteCartCommand(id));
            if (result.Error.type == "CartDeleteFailed")
            {
                return BadRequest(result.Error.description);
            }
            return NoContent();
        }
    }
}
