"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import SimpleProductCard from "./ProductCard";

/* ----------------------------- SLIDES DATA ----------------------------- */

const slides = [
  {
    id: 1,
    type: "original" as const,
    content: {
      buttonLink: "/san-pham/tat-ca-san-pham?page=1",
    },
  },
  {
    id: 2,
    type: "image" as const,
    content: {
      image: "https://foodmart-share-api.bosssoft.vn/public/1.png",
    },
  },
  {
    id: 3,
    type: "image" as const,
    content: {
      image: "https://foodmart-share-api.bosssoft.vn/public/3.png",
    },
  },
];

/* ----------------------------- UTIL ----------------------------- */

function getMobileImage(url: string) {
  const extIndex = url.lastIndexOf(".");
  if (extIndex === -1) return url;
  return url.slice(0, extIndex) + "_mb" + url.slice(extIndex);
}

/* ----------------------------- IMAGE COMPONENT ----------------------------- */

function BannerImage({ desktop }: { desktop: string }) {
  const mobile = getMobileImage(desktop);

  const [desktopSrc, setDesktopSrc] = useState(desktop);
  const [mobileSrc, setMobileSrc] = useState(mobile);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setDesktopSrc("https://foodmart-share-api.bosssoft.vn/public/2.png");
      setMobileSrc("https://foodmart-share-api.bosssoft.vn/public/2_mb.png");
    }
  };

  return (
    <>
      {/* Desktop image */}
      <Image
        src={desktopSrc}
        alt="banner"
        fill
        className="hidden md:block object-contain"
        onError={handleError}
      />

      <Image
        src={mobileSrc}
        alt="banner"
        fill
        className="block md:hidden object-contain"
        onError={handleError}
      />
    </>
  );
}

/* ----------------------------- ORIGINAL SLIDE ----------------------------- */

function OriginalSlide() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center px-4 md:pt-20">

      {/* TEXT */}
      <div className="text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          CHUỖI SIÊU THỊ <br />
          THỰC PHẨM HIỆN ĐẠI
        </h1>

        <p className="text-white/90 mb-6 max-w-lg">
          Chuyên cung cấp thực phẩm
          tươi sống, chất lượng cao cho mọi gia đình.
        </p>

        <Link
          href="/san-pham/tat-ca-san-pham?page=1"
          className="bg-white text-red-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          XEM NGAY
        </Link>
      </div>

      {/* PRODUCT */}
      <SimpleProductCard
        productId={"54441"}
        categorySlug={"thit-dong-lanh"}
        productName={"(Premium) Sườn Cốt Lết"}
        subtitle={""}
        slug={"54441"}
        price={"209000"}
        unit={""}
        image={""}
        discountPercent={""}
      />
    </div>
  );
}

/* ----------------------------- IMAGE SLIDE ----------------------------- */

function ImageSlide({ image }: { image: string }) {
  return (
    <div
      className="
      relative w-full
      h-140 lg:h-120
      md:rounded-2xl
      overflow-hidden
      flex items-center justify-center
    "
    >
      <BannerImage desktop={image} />
    </div>
  );
}

/* ----------------------------- MAIN COMPONENT ----------------------------- */

export default function HeroBannerSlider() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-red-900 via-red-700 to-rose-600"></div>

      {/* Decorations */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative md:max-w-7xl lg:max-w-[85%] mx-auto py-10 pb-5">

        <Swiper
          className="hero-swiper"
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 1000000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>

              {slide.type === "original" && <OriginalSlide />}

              {slide.type === "image" && (
                <ImageSlide image={slide.content.image} />
              )}

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Pagination style */}
      <style jsx global>{`
.hero-swiper {
  padding-bottom: 60px;
}

.hero-swiper .swiper-pagination {
  bottom: 0 !important;
}

.swiper-pagination-bullet {
  background: #e5e7eb;
  opacity: 1;
  width: 8px;
  height: 8px;
  transition: all 0.25s ease;
}

.swiper-pagination-bullet-active {
  background: white;
  width: 26px;
  border-radius: 12px;
}
`}</style>

    </section>
  );
}