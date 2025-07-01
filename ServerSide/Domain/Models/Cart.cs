namespace EShop.API.Models
{
    public sealed class Cart : BaseEntity
    {
        public List<CartItem> Items { get; set; } = [];
    }
}
