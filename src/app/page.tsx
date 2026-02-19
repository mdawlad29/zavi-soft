import dynamic from "next/dynamic";
import { Loader } from "@/components/shared/Loader";

const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  loading: () => <Loader />,
});
const ProductSection = dynamic(() => import("@/components/ProductsSection"), {
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
    </>
  );
}
