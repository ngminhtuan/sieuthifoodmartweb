import { getProductsFeature } from "@/services/category.service";
import ProductSlider from "./SliderFeaturedProduct";

export default async function SimpleProductGrid() {

  const products = await getProductsFeature("12");

  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 py-12 text-center">
      <div className="md:max-w-7xl xl:max-w-max mx-auto px-4 lg:px-40">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Sản Phẩm Nổi Bật
          </h1>
        </div>

        <ProductSlider products={products} />

      </div>
    </div>
  );
}