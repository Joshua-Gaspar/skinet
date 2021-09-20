using System;
using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specification
{
    public class Order_with_items_and_ordering_specification : BaseSpecification<Order>
    {
        public Order_with_items_and_ordering_specification(string email) : base(o => o.BuyerEmail == email){
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
            AddOrderByDescending(o => o.OrderDate);
        }

        public Order_with_items_and_ordering_specification(int id, string email) : base(o => o.Id == id && o.BuyerEmail == email ){
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);

        }
    }
}