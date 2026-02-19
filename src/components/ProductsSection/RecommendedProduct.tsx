"use client";

import { Typography } from "antd";
import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../shared/CardDesign";
import { useGetAllProductsQuery } from "@/services/product.service";

export const RecommendedProduct = () => {
  const swiperRef = useRef<any>(null);
  const { data, error, isLoading } = useGetAllProductsQuery();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="mx-4 mb-[60px] mt-8 md:mx-[60px]">
      <div className="mb-8 flex items-center justify-between">
        <Typography.Text className="block text-[24px] font-semibold leading-[95%] text-secondary md:text-[48px]">
          You may also like
        </Typography.Text>

        <div className="flex items-center gap-2">
          {/* Left Button */}
          <button
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className={`flex size-10 items-center justify-center rounded-lg text-neutral ${isBeginning ? "cursor-not-allowed bg-[#232321]" : "bg-secondary"}`}
          >
            <MdArrowBackIos />
          </button>

          {/* Right Button */}
          <button
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className={`flex size-10 items-center justify-center rounded-lg text-neutral ${isEnd ? "cursor-not-allowed bg-[#232321]" : "bg-secondary"}`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
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
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {data?.map((item: any, idx: number) => (
          <SwiperSlide key={idx}>
            <ProductCard
              price={`$${item.price}`}
              title={
                item?.title?.length > 20
                  ? `${item?.title.slice(0, 20)}...`
                  : item?.title
              }
              url={`/products/${idx}`}
              btnText={`view product`}
              image={item?.images?.[0]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
