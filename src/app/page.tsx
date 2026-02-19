import dynamic from "next/dynamic";
import { Loader } from "@/components/shared/Loader";

const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  loading: () => <Loader />,
});
const ProductSection = dynamic(() => import("@/components/ProductsSection"), {
  loading: () => <Loader />,
});
const Categories = dynamic(() => import("@/components/Categories"), {
  loading: () => <Loader />,
});
const Reviews = dynamic(() => import("@/components/Reviews"), {
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <Categories />
      <Reviews />
    </>
  );
}
