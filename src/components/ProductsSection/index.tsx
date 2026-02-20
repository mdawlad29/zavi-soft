"use client";

import React from "react";
import { SectionHeader } from "../shared/SectionHeader";
import { ProductCard } from "../shared/CardDesign";
import { Col, Row } from "antd";
import { useGetAllProductsQuery } from "@/services/product.service";
import { Loader } from "../shared/Loader";
import ComponentLayout from "@/Layout/ComponentLayout";

interface Product {
  id: string | number;
  title: string;
  price: string;
  images: string;
}

const ProductSection = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <ComponentLayout className="!mb-[128px] !mt-0">
      <SectionHeader
        title={`Don’t miss out <br class="hidden md:block"/> new drops`}
        btnText="SHOP NEW DROPS"
      />

      <Row gutter={[16, 16]}>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>Something went wrong</div>
        ) : (
          data?.map((item: Product, idx: number) => (
            <Col xs={12} sm={12} md={12} lg={6} key={idx}>
              <ProductCard
                price={`$${item.price}`}
                title={
                  item?.title?.length > 20
                    ? `${item?.title.slice(0, 20)}...`
                    : item?.title
                }
                url={`/products/${item?.id}`}
                btnText={`view product`}
                image={item?.images?.[0]}
              />
            </Col>
          ))
        )}
      </Row>
    </ComponentLayout>
  );
};

export default ProductSection;
