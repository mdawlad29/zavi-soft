"use client";

import React from "react";
import { SectionHeader } from "../shared/SectionHeader";
import { ReviewCard } from "../shared/CardDesign";
import { Col, Row } from "antd";

const Reviews = () => {
  return (
    <section className="mx-4 pb-[46px] pt-[20px] md:mx-[60px] md:py-[128px]">
      <div>
        <SectionHeader title="Reviews" btnText="SEE ALL" />

        <Row gutter={[16, 16]}>
          {[...Array(3)].map((item, idx) => (
            <Col xs={24} sm={12} md={12} lg={8} key={idx}>
              <ReviewCard
                title="Good Quality "
                desc="I highly recommend shopping from kicks"
                rating={5}
                userImg="/images/review-user-one.png"
                bannerImg="/images/review-img-one.png"
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Reviews;
