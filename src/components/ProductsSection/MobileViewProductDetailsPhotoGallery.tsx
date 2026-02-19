"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export const ProductPhotoGallery = ({ data }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div>
      {/* MAIN SLIDER */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-[340px] rounded-3xl bg-[#F1F1F1] md:w-[640px]"
      >
        {data?.images?.map((img: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center p-6">
              <Image
                src={img}
                alt="product"
                width={500}
                height={500}
                className="h-[240px] w-full object-cover md:h-[300px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBNAILS */}
      <div className="mt-6 flex items-center gap-2">
        {data?.images?.map((img: any, index: number) => (
          <button
            key={index}
            onClick={() => {
              swiperRef.current?.slideTo(index);
              setActiveIndex(index);
            }}
            className={`w-[64px] rounded-xl bg-[#F1F1F1] p-2 ${
              activeIndex === index ? "ring-2 ring-primary" : ""
            }`}
          >
            <Image
              src={img}
              alt="thumb"
              width={50}
              height={50}
              className="size-[50px] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
