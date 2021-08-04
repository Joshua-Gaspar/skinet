using Core.Entities;

namespace Core.Specification
{
    public class Product_With_Filter_For_Count_Specification : BaseSpecification<Product>
    {
        public Product_With_Filter_For_Count_Specification(ProductSpecParams productParams) :
        base(x =>
            (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
            (!productParams.BrandId.HasValue || x.ProductBrandId == productParams.BrandId) && (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId))
        {
        }
    }
}