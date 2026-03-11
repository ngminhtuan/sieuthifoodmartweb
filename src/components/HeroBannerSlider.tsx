"use client";

import Image from "next/image";
import { FaLeaf } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import SimpleProductCard from "./ProductCard";
import Link from "next/link";

const slides = [
  {
    id: 1,
    type: "original" as const,
    content: {
      title: {
        line1: "An toàn",
        line2: "tiện lợi",
        highlight: "tươi ngon",
        line3: "chất lượng",
      },
      description:
        "Chuyên cung cấp thực phẩm tươi và chất lượng nhất\nĐảm bảo an toàn và sức khỏe của khách hàng.",
      buttonText: "Mua ngay",
      buttonLink: "/san-pham/tat-ca-san-pham?page=1",
      image: "/bannerfood.png",
      badge: {
        icon: FaLeaf,
        text: "100% Tươi sạch",
      },
    },
  },
  {
    id: 2,
    type: "image" as const,
    content: {
      image: "https://foodmart-share-api.bosssoft.vn/public/2_mb.png",
    },
  },
  {
    id: 3,
    type: "image" as const,
    content: {
      image: "/https://foodmart-share-api.bosssoft.vn/public/3_mb.png",
    },
  },
];

export default function HeroBannerSlider() {
  const renderSlideContent = (slide: (typeof slides)[0]) => {
    if (slide.type === "original") {
      return (
        <div className="grid md:grid-cols-2 gap-8 items-center px-4 pb-10">

          {/* TEXT */}
          <div className="text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            CHUỖI SIÊU THỊ <br />
            THỰC PHẨM HIỆN ĐẠI
          </h1>

          <p className="text-white/90 mb-6 max-w-lg">
            Thông điệp ngắn gọn của chuỗi bán lẻ. 
            Chuyên cung cấp thực phẩm tươi sống, 
            chất lượng cao cho mọi gia đình.
          </p>

          <Link href={'/san-pham/tat-ca-san-pham?page=1'} className="bg-white text-red-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
            XEM NGAY
          </Link>
        </div>

          {/* IMAGE */}
          <SimpleProductCard
            productId={'54441'}
            categorySlug={'thit-dong-lanh'}
            productName={'(Premium) Sườn Cốt Lết'}
            subtitle={''}
            slug={'54441'}
            price={'209000'}
            unit={''}
            image={''}
            discountPercent={''}
          />
        </div>
      );
    }

    if (slide.type === "image") {
      return (
        <div className="relative w-full aspect-16/5 rounded-3xl overflow-hidden">
          <Image
            src={slide.content.image}
            alt="slide"
            fill
            className="object-cover"
          />
        </div>
      );
    }
  };

  return (
    <section className="relative overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 bg-linear-to-br from-red-900 via-red-700 to-rose-600"></div>

      {/* blur decorations */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative md:max-w-7xl lg:max-w-[85%] mx-auto pt-20">

        <Swiper
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
              {renderSlideContent(slide)}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Pagination custom style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: white;
          width: 22px;
          border-radius: 6px;
        }
      `}</style>

    </section>
  );
}