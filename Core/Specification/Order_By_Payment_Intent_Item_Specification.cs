
using Core.Entities.OrderAggregate;

namespace Core.Specification
{
    public class Order_By_Payment_Intent_Item_Specification : BaseSpecification<Order>
    {
        public Order_By_Payment_Intent_Item_Specification(string paymentIntentId) 
        : base(o => o.PaymentIntentId == paymentIntentId)
        {
            
        }
    }
}