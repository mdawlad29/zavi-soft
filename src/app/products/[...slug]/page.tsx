import { RecommendedProduct } from "@/components/ProductsSection/RecommendedProduct";
import { Loader } from "@/components/shared/Loader";
import dynamic from "next/dynamic";

const ProductDetails = dynamic(
  () => import("@/components/ProductsSection/ProductDetails"),
  {
    loading: () => <Loader />,
  }
);

const ProductsPage = () => {
  return (
    <>
      <ProductDetails />
      <RecommendedProduct />
    </>
  );
};

export default ProductsPage;
