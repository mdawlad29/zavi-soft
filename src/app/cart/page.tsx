import { RecommendedProduct } from "@/components/ProductsSection/RecommendedProduct";
import { Loader } from "@/components/shared/Loader";
import dynamic from "next/dynamic";
import React from "react";

const OrderSummery = dynamic(() => import("@/components/OrderSummery"), {
  loading: () => <Loader />,
});

const Cart = () => {
  return (
    <>
      <OrderSummery />
      <RecommendedProduct />
    </>
  );
};

export default Cart;
