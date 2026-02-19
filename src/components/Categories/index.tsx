"use client";

import { Typography } from "antd";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

import "swiper/css";
import { useGetAllCategoriesQuery } from "@/services/categories.service";
import { Loader } from "../shared/Loader";

interface CategoriesProps {
  id: number;
  name: string;
  image: string;
}

const Categories = () => {
  const swiperRef = useRef<any>(null);
  const { data, error, isLoading } = useGetAllCategoriesQuery();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (isLoading) return <Loader />;
  if (error)
    return <div className="text-red-500">Failed to load categories</div>;

  return (
    <section className="bg-secondary pt-8 md:pt-[90px]">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between px-4 md:px-[60px]">
        <Typography.Text className="block text-[24px] font-semibold uppercase leading-[95%] text-white md:text-[48px] lg:text-[74px]">
          Categories
        </Typography.Text>

        <div className="flex items-center gap-2">
          {/* Left Button */}
          <button
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className={`flex size-10 items-center justify-center rounded-lg ${isBeginning ? "cursor-not-allowed bg-gray-300" : "bg-neutral"}`}
          >
            <MdArrowBackIos />
          </button>

          {/* Right Button */}
          <button
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className={`flex size-10 items-center justify-center rounded-lg ${isEnd ? "cursor-not-allowed bg-gray-300" : "bg-neutral"}`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <div className="ml-4 rounded-tl-[64px] bg-[#F6F6F6] px-4 py-10 md:ml-[60px] md:px-[60px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          slidesPerGroup={2}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {data?.map((category: CategoriesProps, idx: number) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <Image
                  src={category.image || "/images/fallback-img.png"}
                  alt="category-img"
                  width={302}
                  height={334}
                  className="h-[300px] object-cover"
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Typography.Text className="block text-[24px] font-semibold leading-[100%] text-secondary lg:text-[36px]">
                  {category.name}
                </Typography.Text>

                <button className="flex size-8 items-center justify-center rounded-lg bg-secondary text-neutral md:size-12">
                  <GoArrowUpRight className="text-lg" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
