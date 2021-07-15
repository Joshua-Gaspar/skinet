using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specification
{
    public class Products_With_Type_And_Brands_Specification : BaseSpecification<Product>
    {
        public Products_With_Type_And_Brands_Specification()
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }

        public Products_With_Type_And_Brands_Specification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}