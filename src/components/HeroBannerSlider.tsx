"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import SimpleProductCard from "./ProductCard";

/* ---------------- SLIDES DATA ---------------- */

const slides = [
  { id: 1, type: "original" as const },

  { id: 2, type: "image" as const, image: "https://foodmart-share-api.bosssoft.vn/public/1.png" },
  { id: 3, type: "image" as const, image: "https://foodmart-share-api.bosssoft.vn/public/2.png" },
  { id: 4, type: "image" as const, image: "https://foodmart-share-api.bosssoft.vn/public/3.png" },
  { id: 5, type: "image" as const, image: "https://foodmart-share-api.bosssoft.vn/public/4.png" },
  { id: 6, type: "image" as const, image: "https://foodmart-share-api.bosssoft.vn/public/5.png" },
  { id: 7, type: "image" as const, image: "https://foodmart-share-api.bosssoft.vn/public/6.png" },
];

/* ---------------- UTIL ---------------- */

function getMobileImage(url: string) {
  const extIndex = url.lastIndexOf(".");
  if (extIndex === -1) return url;
  return url.slice(0, extIndex) + "_mb" + url.slice(extIndex);
}

function checkImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
}

/* ---------------- ORIGINAL SLIDE ---------------- */

function OriginalSlide() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center px-4 md:pt-20">

      <div className="text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          CHUỖI SIÊU THỊ <br /> THỰC PHẨM HIỆN ĐẠI
        </h1>

        <p className="text-white/90 mb-6 max-w-lg">
          Chuyên cung cấp thực phẩm tươi sống, chất lượng cao cho mọi gia đình.
        </p>

        <Link
          href="/san-pham/tat-ca-san-pham?page=1"
          className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold"
        >
          XEM NGAY
        </Link>
      </div>
      <div className="py-6">
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
    </div>
  );
}

/* ---------------- IMAGE SLIDE ---------------- */

function ImageSlide({ image }: { image: string }) {
  return (
    <div className="relative w-full h-135">
      <Image
        src={image}
        alt="banner"
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function HeroBannerSlider() {

  const [desktopSlides, setDesktopSlides] = useState<typeof slides>(slides);
  const [mobileSlides, setMobileSlides] = useState<typeof slides>(slides);

  useEffect(() => {

    async function validateSlides() {

      const results = await Promise.all(
        slides.map(async (slide) => {

          if (slide.type === "original") {
            return {
              desktop: slide,
              mobile: slide
            };
          }

          const mobileUrl = getMobileImage(slide.image);

          const [desktopExists, mobileExists] = await Promise.all([
            checkImage(slide.image),
            checkImage(mobileUrl)
          ]);

          return {
            desktop: desktopExists ? slide : null,
            mobile: mobileExists ? { ...slide, image: mobileUrl } : null
          };
        })
      );

      setDesktopSlides(results.map(r => r.desktop).filter(Boolean) as typeof slides);
      setMobileSlides(results.map(r => r.mobile).filter(Boolean) as typeof slides);
    }

    validateSlides();

  }, []);

  return (
    <section className="relative overflow-visible">

      <div className="absolute inset-0 bg-linear-to-br from-red-900 via-red-700 to-rose-600"></div>

      <div className="relative md:max-w-7xl lg:max-w-[85%] mx-auto py-1">

        {/* DESKTOP */}

        <div className="hidden md:block">

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 10000 }}
            pagination={{ clickable: true }}
            loop
          >

            {desktopSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                {slide.type === "original"
                  ? <OriginalSlide />
                  : <ImageSlide image={slide.image} />
                }
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

        {/* MOBILE */}

        <div className="block md:hidden">

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 1000000 }}
            pagination={{ clickable: true }}
            loop
          >

            {mobileSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                {slide.type === "original"
                  ? <OriginalSlide />
                  : <ImageSlide image={slide.image} />
                }
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

      <style jsx global>{`

.swiper-pagination {
  bottom: 0px !important;
}

.swiper-pagination-bullet {
  background: #e5e7eb;
  opacity: 1;
  width: 8px;
  height: 8px;
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