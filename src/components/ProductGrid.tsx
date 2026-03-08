import SimpleProductCard from "./ProductCard";
import { getProductsFeature } from "@/services/category.service";

export default async function SimpleProductGrid() {

  const products = await getProductsFeature("12");

  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 py-12">
      <div className="md:max-w-7xl xl:max-w-max mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              Sản phẩm nổi bật / bán chạy
            </h1>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products?.map((product: any, index: any) => (
              <SimpleProductCard
                key={index}
                productId={product.id}
                categorySlug={product.categorySlug}
                productName={product.productName}
                subtitle={product.subtitle}
                slug={product.productId}
                price={product.price}
                unit={product.unit}
                image={product.productImageUrl}
                discountPercent={product.discountPercent}
              />
          ))}
        </div>
      </div>
    </div>
  );
}
