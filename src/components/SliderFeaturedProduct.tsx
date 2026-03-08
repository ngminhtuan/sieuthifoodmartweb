"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import SimpleProductCard from "./ProductCard";

export default function ProductSlider({ products }: any) {
  return (
    <div className="relative">

      {/* LEFT ARROW */}
      <button className="swiper-button-prev-custom hidden lg:block absolute -left-15 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-3">
        <ChevronLeft size={20} />
      </button>

      {/* RIGHT ARROW */}
      <button className="swiper-button-next-custom hidden lg:block absolute -right-15 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-3">
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
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {products?.map((product: any, index: any) => (
          <SwiperSlide key={index}>
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