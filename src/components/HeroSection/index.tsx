"use client";
import { Button, Typography } from "antd";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="mx-4 mb-[90px] mt-6 md:mx-[60px]">
      {/* Hero Title */}
      <Typography.Title
        level={1}
        className="!m-0 !mb-6 inline-block text-[57px] !font-bold uppercase !text-secondary md:!text-[108px] lg:!text-[193px]"
      >
        do it <span className="!text-primary">right</span>
      </Typography.Title>

      {/* Hero Image */}
      <div className="relative overflow-hidden">
        <div className="absolute -left-20 top-40 -rotate-90 bg-secondary p-6 text-[#E7E7E3]">
          Nike product of the year{" "}
        </div>

        <Image
          src={"/images/hero-section-img.png"}
          alt="hero-img"
          width={1320}
          height={750}
          className="h-[750px] w-full rounded-3xl object-cover"
        />

        <div className="absolute bottom-0 w-full px-4 pb-12 md:px-12">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <Typography.Text className="text-[24px] font-semibold text-neutral md:text-[32px] lg:text-[74px]">
                NIKE AIR MAX
              </Typography.Text>
              <Typography.Text className="mb-4 block text-[14px] text-[#E7E7E3] md:text-[24px]">
                Nike introducing the new air max for <br /> everyone's comfort{" "}
              </Typography.Text>

              <Button type="primary" className="h-12 w-[138px]">
                SHOP NOW
              </Button>
            </div>

            <div>
              <div className="mb-4 size-16 overflow-hidden rounded-lg border border-[#E7E7E3] md:size-[130px] md:rounded-[32px] lg:size-[160px]">
                <Image
                  src={"/images/hero-section-img-1.png"}
                  alt="hero-img"
                  width={160}
                  height={160}
                  className="size-full"
                />
              </div>
              <div className="size-16 overflow-hidden rounded-lg border border-[#E7E7E3] md:size-[130px] md:rounded-[32px] lg:size-[160px]">
                <Image
                  src={"/images/hero-section-img-2.png"}
                  alt="hero-img"
                  width={160}
                  height={160}
                  className="size-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
