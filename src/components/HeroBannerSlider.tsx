'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { FaLeaf, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Define your slides here
const slides = [
  {
    id: 1,
    type: 'original' as const,
    content: {
      title: {
        line1: "An toàn",
        line2: "tiện lợi",
        highlight: "tươi ngon",
        line3: "chất lượng"
      },
      description: "Chuyên cung cấp thực phẩm tươi và chất lượng nhất\nĐảm bảo an toàn và sức khỏe của khách hàng.",
      buttonText: "Mua ngay",
      buttonLink: "/san-pham",
      image: "/bannerfood.png",
      badge: {
        icon: FaLeaf,
        text: "100% Tươi sạch"
      }
    }
  },

  {
    id: 2,
    type: 'image' as const,
    content: {
      image: "/slide1.png"
    }
  },

  {
    id: 3,
    type: 'image' as const,
    content: {
      image: "/slide2.png"
    }
  }
];

export default function HeroBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderSlideContent = (slide: typeof slides[0]) => {
    if (slide.type === 'original') {
      return (
        <div className="grid md:grid-cols-2 gap-8 items-center w-full shrink-0 px-4">
          <div className="text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {slide.content.title.line1}<br />
              {slide.content.title.line2} <span className="relative">
                {slide.content.title.highlight}
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-yellow-400/50 -z-10"></div>
              </span><br />
              {slide.content.title.line3}
            </h1>

            <p className="text-lg mb-8 text-white/90 whitespace-pre-line">
              {slide.content.description}
            </p>

            <button className="bg-linear-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              {slide.content.buttonText}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="w-full h-64 md:h-4/5 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
                <Image
                  src={slide.content.image}
                  alt="banner"
                  width={350}
                  height={350}
                />
              </div>
            </div>

            {slide.content.badge && (
              <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-xl p-4 text-center">
                <slide.content.badge.icon className="text-green-600 text-3xl mx-auto mb-2" />
                <div className="font-bold text-gray-900">{slide.content.badge.text}</div>
              </div>
            )}
          </div>
        </div>
      );
    }
    if (slide.type === 'image') {
      return (
        <div className="relative w-full aspect-16/5 bg-green-700 rounded-3xl overflow-hidden">
          <Image
            src={slide.content.image}
            alt="slide image"
            fill
            priority
            className="object-contain"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <section className="bg-linear-to-br from-green-700 via-green-600 to-green-800 relative overflow-hidden mb-5">
      <div className="md:max-w-7xl lg:max-w-10/12 mx-auto py-12 md:py-20">

        {/* Slider Container - All slides rendered */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full shrink-0 flex">
                {renderSlideContent(slide)}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-6 h-6" />
        </button> */}

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${index === currentSlide
                ? 'bg-white w-8 h-3'
                : 'bg-white/50 w-3 h-3 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
