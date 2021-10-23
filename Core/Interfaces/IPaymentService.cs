using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;

namespace Core.Interfaces
{
    public interface IPaymentService
    {
        Task<CustomerBasket> CreateOrUpdatePaymentIntent(string basketId);
        Task<Order> Updade_Order_Payment_Succeeded(string paymentIntent);
        Task<Order> Updade_Order_Payment_Failed(string paymentIntent);
    }
}