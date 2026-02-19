"use client";

import React from "react";
import { SectionHeader } from "../shared/SectionHeader";
import { ProductCard } from "../shared/CardDesign";
import { Col, Row } from "antd";

const ProductSection = () => {
  return (
    <section className="mx-4 mb-[128px] md:mx-[60px]">
      <SectionHeader
        title={`Don’t miss out <br class="hidden md:block"/> new drops`}
        btnText="SHOP NEW DROPS"
      />

      <Row gutter={[16, 16]}>
        {[...Array(4)].map((item, idx) => (
          <Col xs={12} sm={8} md={8} lg={6} key={idx}>
            <ProductCard
              isNew
              price="$120"
              title="Product title"
              url={`/products/${idx}`}
              btnText={`view product`}
              image="/images/product-demo-img.png"
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProductSection;
