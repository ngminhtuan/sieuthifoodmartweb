import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import ProductInteractive from "./ProductInteractive";
import ProductRelated from "./ProductRelated";

interface ProductDetailProps {
  product: any;
}

export default function ProductDetailView({ product }: ProductDetailProps) {
  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-green-600 flex items-center gap-1">
              <FaHome className="text-xs" />
              Trang chủ
            </Link>
            <FaChevronRight className="text-xs" />
            <span className="text-green-600 font-semibold">
              {product.productName}
            </span>
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">

        <ProductInteractive product={product}/>

        <ProductRelated categoryId={product.categoryId} /> 

      </div>
    </div>
  );
}