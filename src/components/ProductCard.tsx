// components/SimpleProductCard.tsx
'use client';

import { useRouter } from "next/navigation";
import { useProductStore } from "@/store/useProductStore";

type BadgeType = 'discount' | 'bestseller' | 'new' | 'hot';

interface SimpleProductCardProps {
  id: string;
  productName: string;
  subtitle?: string;
  slug: string;
  categorySlug: string;
  price: any;
  unit?: string;
  image?: string;
  icon?: string;
  badge?: BadgeType;
  badgeLabel?: string;
  discountPercent?: number;
}

export default function SimpleProductCard({
  id,
  productName,
  subtitle,
  categorySlug,
  slug,
  price,
  unit,
  image,
  icon,
  badge,
  badgeLabel,
  discountPercent
}: SimpleProductCardProps) {

  const router = useRouter();
  const setSelectedProduct = useProductStore(
    (state) => state.setSelectedProduct
  );

  const handleClick = () => {
    setSelectedProduct({
      id,
      productName,
      subtitle,
      categorySlug,
      slug,
      price,
      unit,
      image,
      icon,
      badge,
      badgeLabel,
      discountPercent
    });

    router.push(`/san-pham/${categorySlug}/${slug}`);
  };

  // Split price into integer and decimal
  // const [integerPart, decimalPart] = price.split('.');

  // Badge configurations
  const badgeConfig = {
    discount: {
      bg: 'bg-gradient-to-r from-red-500 to-pink-600',
      text: discountPercent ? `-${discountPercent}%` : 'SALE',
      icon: '🔥'
    },
    bestseller: {
      bg: 'bg-gradient-to-r from-yellow-500 to-orange-600',
      text: 'BEST SELLER',
      icon: '⭐'
    },
    new: {
      bg: 'bg-gradient-to-r from-green-500 to-emerald-600',
      text: 'NEW',
      icon: '✨'
    },
    hot: {
      bg: 'bg-gradient-to-r from-orange-500 to-red-600',
      text: 'HOT',
      icon: '🔥'
    }
  };

  const currentBadge = badge ? badgeConfig[badge] : null;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 
                w-full relative flex flex-col h-full">
      {/* Badge */}
      {badge && (
        <div className={`absolute top-3 left-3 ${badgeConfig[badge].bg}`}>
          {badgeConfig[badge].icon}
          <span>{badgeLabel ?? badgeConfig[badge].text}</span>
        </div>
      )}
      <div className="flex-1 flex flex-col">
        {/* Product Image */}
        <div className="w-full h-32 mb-3 flex items-center justify-center bg-gray-50 rounded-xl">
          {image ? (
            <img src={'/logo-6609-removebg.png'} alt={productName} className="w-full h-full object-contain p-2" />
          ) : (
            // <div className="text-5xl">{icon ?? "📦"}</div>
            <img src={'/logo-6609-removebg.png'} alt={productName} className="w-full h-full object-contain p-2" />
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-semibold text-gray-800 text-center mb-1 line-clamp-2 min-h-10">
          {productName}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs text-gray-500 text-center mb-1 min-h-4">
            ({subtitle})
          </p>
        )}

        {/* Unit */}
        {unit && (
          <p className="text-xs text-gray-400 text-center mb-3 min-h-4">
            {unit}
          </p>
        )}

        {/* Price */}
        <div className="flex items-end justify-center mb-4 mt-auto">
          <span className=" font-bold text-gray-900">
            {price}VND
          </span>
        </div>
      </div>
      {/* View Details Button / Quantity Selector */}
      {/* <Link
        href={{
          pathname: `/san-pham/${categorySlug}/${id}`,
          query: {
            name: productName,
            price: price
          }
        }}
        className="w-full flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Chi tiết 
      </Link> */}
      <button
        onClick={handleClick}
        className="mt-3 w-full rounded-lg bg-green-600 py-2 text-white"
      >
        Chi tiết
      </button>
    </div>
  );
}

// Example Usage Component
export function SimpleProductGrid() {
  const products = [
    {
      id: "102841",
      productName: "A1 Bánh Gạo Giòn Tan Trẻ Em Vị Rau Củ",
      subtitle: "Bánh ăn dặm cho bé",
      categorySlug: "banh-keo",
      slug: "a1-banh-gao-gion-tan-tre-em-vi-rau-cu",
      price: "34000",
      unit: "VND",
      image: "🍘",
      badge: "discount",
      badgeLabel: "Cho bé",
      discountPercent: 10,
    },
    {
      id: "81354",
      productName: "Cá Lưỡi Trâu Tươi",
      subtitle: "Hải sản tươi sống",
      categorySlug: "ca-tuoi",
      slug: "ca-luoi-trau-tuoi",
      price: "295000",
      unit: "VND",
      image: "🐟",
      badge: "discount",
      badgeLabel: "Cho bé",
      discountPercent: 0,
    },
    {
      id: "86464",
      productName: "Bắp Cải Tím",
      subtitle: "Rau củ tươi",
      categorySlug: "cu-qua-tuoi",
      slug: "bap-cai-tim",
      price: "18000",
      unit: "VND",
      image: "🥬",
      badge: "discount",
      badgeLabel: "Cho bé",
      discountPercent: 0,
    },
    {
      id: "111282",
      productName: "Bánh Bắp Corn Snack Tom Yum Kung",
      subtitle: "Đồ ăn vặt",
      categorySlug: "do-an-vat",
      slug: "banh-bap-corn-snack-tom-yum-kung",
      price: "12000",
      unit: "VND",
      image: "🌽",
      badge: "discount",
      badgeLabel: "Cho bé",
      discountPercent: 5,
    },
    {
      id: "90933",
      productName: "3In1 Tắm - Gội - Dưỡng Xmen Mật Ong Manuka",
      subtitle: "Chăm sóc cá nhân nam",
      categorySlug: "cham-soc-ca-nhan",
      slug: "3in1-xmen-mat-ong-manuka",
      price: "89000",
      unit: "VND",
      image: "🧴",
      badge: "discount",
      badgeLabel: "Cho mẹ",
      discountPercent: 15,
    },
    {
      id: "97619",
      productName: "Bánh Bao Mandu Nhân Xúc Xích Phô Mai 300G",
      subtitle: "Đồ đông lạnh",
      categorySlug: "do-dong-khac",
      slug: "banh-bao-mandu-xuc-xich-pho-mai",
      price: "45000",
      unit: "VND",
      image: "🥟",
      badge: "discount",
      badgeLabel: "Cho bé",
      discountPercent: 0,
    },
    {
      id: "102908",
      productName: "AFC Chân Gà Sả Tắc 172G",
      subtitle: "Bánh snack",
      categorySlug: "banh-keo",
      slug: "afc-chan-ga-sa-tac-172g",
      price: "22000",
      unit: "VND",
      image: "🍪",
      badge: "discount",
      badgeLabel: "Cho bé",
      discountPercent: 20,
    },
    {
      id: "103336",
      productName: "Xe Điều Khiển Stuht No.999G-27C",
      subtitle: "Đồ chơi trẻ em",
      categorySlug: "do-choi-tre-em",
      slug: "xe-dieu-khien-stuht-999g-27c",
      price: "299000",
      unit: "VND",
      image: "🧸",
      badge: 'discount',
      badgeLabel: "Cho bé",
      discountPercent: 0,
    },
    {
      id: "90934",
      productName: "3In1 Tắm - Gội - Dưỡng Xmen Mật Ong Manuka",
      subtitle: "Chăm sóc cá nhân nam",
      categorySlug: "cham-soc-ca-nhan",
      slug: "3in1-xmen-mat-ong-manuka",
      price: "89000",
      unit: "VND",
      image: "🧴",
      badge: "discount",
      badgeLabel: "Cho mẹ",
      discountPercent: 15,
    },
    {
      id: "97610",
      productName: "Bánh Bao Mandu Nhân Xúc Xích Phô Mai 300G",
      subtitle: "Đồ đông lạnh",
      categorySlug: "do-dong-khac",
      slug: "banh-bao-mandu-xuc-xich-pho-mai",
      price: "45000",
      unit: "VND",
      image: "🥟",
      badge: "discount",
      badgeLabel: "Cho bé",
      discountPercent: 0,
    },
  ];



  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 py-12">
      <div className="md:max-w-7xl xl:max-w-max mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              Sản phẩm nổi bật / bán chạy
            </h1>
            <a href="#" className="text-green-600 font-semibold hover:underline flex items-center gap-2">
              See more →
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <SimpleProductCard key={product.id} 
            id={product.id} 
            categorySlug={product.categorySlug} 
            productName={product.productName} 
            subtitle={product.subtitle} 
            slug={product.slug} 
            price={product.price} 
            unit={product.unit}
            image={product.image}
            discountPercent={product.discountPercent}
          />
          ))}
        </div>
      </div>
    </div>
  );
}
