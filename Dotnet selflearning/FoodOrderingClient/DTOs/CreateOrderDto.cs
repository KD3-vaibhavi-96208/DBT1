namespace FoodOrderingClient.DTOs
{
    public class CreateOrderDto
    {
        public List<CartItemDto> CartItems { get; set; }
        public decimal TotalAmount { get; set; }
    }
}
