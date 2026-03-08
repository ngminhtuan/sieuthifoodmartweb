import Link from "next/link";

type BadgeType = 'discount' | 'bestseller' | 'new' | 'hot';

export interface ProductUnit {
  id: number;
  productId: number;
  unitId: number;
  unitName: string;
  unitExchange: number;
  price: number;
  grossProfit: number;
  oldPrice: number;
  isPrimary: boolean;
  barcode: string | null;
  branchId: number;
  status: number;
}

interface SimpleProductCardProps {
  productId: any;
  categorySlug: any;
  productName: string;
  subtitle:string;
  slug: string;
  price:any;
  unit: any;
  image: any;
  discountPercent: any;
}

export default function SimpleProductCard({
  productId,
  categorySlug,
  productName,
  subtitle,
  slug,
  price,
  unit,
  image,
  discountPercent,
}: SimpleProductCardProps) {

  function formatVND(number: number) {
    return Number(number).toLocaleString("vi-VN");
  }

  return (
    <div
      key={productId}
      className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 
                w-full relative flex flex-col h-full"
    >
      {/* Discount badge */}
      {discountPercent && (
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
          -{discountPercent}%
        </div>
      )}

      <div className="flex-1 flex flex-col">

        {/* Image */}
        <div className="w-full h-32 mb-3 flex items-center justify-center bg-gray-50 rounded-xl">
          <img
            src={image || "/logo-6609-removebg.png"}
            alt={productName}
            className="w-full h-full object-contain p-2"
          />
        </div>

        {/* Name */}
        <h3 className="text-sm font-semibold text-gray-800 text-center mb-1 line-clamp-2 min-h-10">
          {productName}
        </h3>

        {/* Subtitle nếu có */}
        {subtitle && (
          <p className="text-xs text-gray-400 text-center mb-1">
            {subtitle}
          </p>
        )}

        {/* Unit */}
        {unit && (
          <p className="text-xs text-gray-400 text-center mb-3 min-h-4">
            {unit}
          </p>
        )}

        {/* Price */}
        <div className="flex items-center justify-center mb-4 mt-auto flex-col">
          <span className="font-bold text-gray-900">
            {formatVND(price)}đ
          </span>
        </div>
      </div>

      {/* URL theo yêu cầu */}
      <Link
        href={`/san-pham/${categorySlug}/${slug}`}
        className="mt-3 w-full rounded-lg bg-green-600 py-2 text-white text-center hover:bg-green-700 transition"
      >
        Chi tiết
      </Link>
    </div>
  );
}
