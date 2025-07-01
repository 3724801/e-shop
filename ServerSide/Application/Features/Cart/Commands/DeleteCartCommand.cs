using Domain.Abstractions;
using MediatR;

namespace EShop.API.Features.Cart.Commands
{
    public record DeleteCartCommand(Guid Id) : IRequest<Result>;

}
