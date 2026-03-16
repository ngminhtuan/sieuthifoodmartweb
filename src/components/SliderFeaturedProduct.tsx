"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import SimpleProductCard from "./ProductCard";

type ProductSliderProps = {
  products: any[];
};

export default function ProductSlider({ products }: ProductSliderProps) {
  if (!products || products.length === 0) return null;

  const productCount = products.length;

  /* -----------------------
     CASE 1: ONLY 1 PRODUCT
  ------------------------*/
  if (productCount === 1) {
    const product = products[0];

    return (
      <div className="flex justify-center">
        <div className="w-55">
          <SimpleProductCard
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
        </div>
      </div>
    );
  }

  /* -----------------------
     CASE 2: 2 → 4 PRODUCTS
     USE GRID (NO CAROUSEL)
  ------------------------*/
  if (productCount <= 4) {
  return (
    <div className="flex justify-center item">
      {products.map((product) => (
        <div key={product.id} className="w-55 ml-3">
          <SimpleProductCard
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
        </div>
      ))}
    </div>
  );
}
  /* -----------------------
     CASE 3: >=5 PRODUCTS
     USE SWIPER
  ------------------------*/

  return (
    <div className="relative">

      {/* LEFT ARROW */}
      <button className="swiper-button-prev-custom hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-3 dark:text-black">
        <ChevronLeft size={20} />
      </button>

      {/* RIGHT ARROW */}
      <button className="swiper-button-next-custom flex absolute -right-4 lg:-right-14 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-3 dark:text-black">
        <ChevronRight size={20} />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        spaceBetween={16}
        slidesPerView={5}
        centeredSlides={false}
        centerInsufficientSlides={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1536: { slidesPerView: 6 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <SimpleProductCard
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}