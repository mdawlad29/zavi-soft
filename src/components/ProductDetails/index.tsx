import { pathname } from "../helper";
import OurProducts from "../OurProduct";
import HeroSection from "../shared/HeroSection";
import ProductFeature from "./ProductFeature";
import Subscription from "./Subscription";

const productDetailsHero = {
  link: "/contact-us",
  imageWidth: 700,
  imageHeight: 700,
  backBtn: "product",
  btnText: "Try Demo",
  bgImage: "/assets/images/hero/product-details-bg.png",
  image: "/assets/images/hero/product-details-banner-img.png",
  title: `Over 182 sports on <br/> one website`,
  desc: "Lorem ipsum dolor sit amet consectetur. Nibh diam <br/>mattis tellus id. Eget tellus mauris semper",
};

const ProductDetails = () => {
  const heroProps = [
    "sports",
    "e-sports",
    "slots",
    "casinos",
    "games",
    "bingo",
    "toto",
    "tv-games",
    "financials",
  ].includes(pathname())
    ? productDetailsHero
    : null;

  return (
    <>
      {heroProps ? <HeroSection {...heroProps} /> : null}
      <ProductFeature />
      <Subscription />

      <OurProducts title="Explore Further Product" />
    </>
  );
};

export default ProductDetails;
