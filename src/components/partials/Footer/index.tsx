import { Button, Col, Input, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-4 md:mx-[60px]">
      <div className="overflow-hidden rounded-3xl bg-primary">
        {/* footer section one */}
        <div className="px-4 pb-[39px] pt-4 md:px-[72px] md:pt-16">
          <Row gutter={[103, 32]} align={"middle"}>
            <Col xs={24} lg={14}>
              <Typography.Text className="mb-4 block text-[32px] font-semibold uppercase leading-[100%] text-white md:text-[48px]">
                Join our KicksPlus Club & get 15% off
              </Typography.Text>
              <Typography.Text className="mb-4 block text-[16px] font-semibold leading-[100%] text-[#E7E7E3] md:text-[20px]">
                Sign up for free! Join the community.
              </Typography.Text>

              <div className="flex items-center gap-1">
                <Input
                  placeholder="Enter your email"
                  className="h-[48px] border !border-neutral !bg-transparent px-4 text-[16px] !text-[#E7E7E3]"
                />

                <Button className="!h-[48px] !border-none !bg-secondary px-6 text-[14px] text-neutral">
                  SUBMIT
                </Button>
              </div>
            </Col>

            <Col xs={24} lg={10}>
              <Image
                src={"/images/footer-logo-2.png"}
                alt="footer-logo-2"
                width={367}
                height={112}
                className="object-contain"
              />
            </Col>
          </Row>
        </div>

        {/* footer section two */}
        <div className="relative rounded-t-3xl bg-secondary px-6 pt-4 md:px-[29px] md:pt-[97px]">
          <Row
            gutter={[24, 32]}
            className="pb-[120px] md:pb-[200px] lg:pb-[290px]"
          >
            {/* About */}
            <Col xs={24} sm={24} md={12} lg={9}>
              <FooterTitle title="About Us" />

              <Typography.Text className="block text-base font-semibold leading-[100%] text-[#E7E7E3] md:text-lg lg:text-[20px]">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </Typography.Text>
            </Col>

            {/* Categories */}
            <Col xs={24} sm={12} md={12} lg={5}>
              <FooterTitle title="Categories" />

              {[
                "runners",
                "sneakers",
                "basketball",
                "outdoor",
                "golf",
                "hiking",
              ].map((item) => (
                <FooterLinkTag
                  key={item}
                  title={item}
                  url="/"
                  className="mb-2 last:mb-0"
                />
              ))}
            </Col>

            {/* Company */}
            <Col xs={24} sm={12} md={12} lg={5}>
              <FooterTitle title="Company" />

              {["about", "contact", "blog"].map((item) => (
                <FooterLinkTag
                  key={item}
                  title={item}
                  url="/"
                  className="mb-2 last:mb-0"
                />
              ))}
            </Col>

            {/* Follow */}
            <Col xs={24} sm={24} md={12} lg={5}>
              <FooterTitle title="Follow Us" />

              <div className="flex items-center gap-6">
                <Link
                  href=""
                  className="text-neutral transition hover:text-primary"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  href=""
                  className="text-neutral transition hover:text-primary"
                >
                  <GrInstagram size={20} />
                </Link>
                <Link
                  href=""
                  className="text-neutral transition hover:text-primary"
                >
                  <FaTwitter size={20} />
                </Link>
                <Link
                  href=""
                  className="text-neutral transition hover:text-primary"
                >
                  <FaTiktok size={20} />
                </Link>
              </div>
            </Col>
          </Row>

          {/* <div className="mt-[97px]" /> */}

          <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 translate-y-1/2 md:bottom-9 md:px-1 lg:bottom-[60px] lg:px-[29px]">
            <Image
              src={"/images/footer-logo-1.png"}
              width={1262}
              height={313}
              alt="footer-logo-1"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      <span className="block pb-[18px] pt-[28px] text-center text-[16px] text-secondary">
        © All rights reserved
      </span>
    </footer>
  );
};

export default Footer;

const FooterTitle = ({ title }: { title: string }) => {
  return (
    <Typography.Text className="mb-4 block text-[24px] font-semibold capitalize leading-[100%] text-[#FFA52F] md:text-[36px]">
      {title}
    </Typography.Text>
  );
};

const FooterLinkTag = ({
  title,
  url,
  className,
}: {
  title: string;
  url: string;
  className?: string;
}) => {
  return (
    <Link
      href={url}
      className={`block text-[18px] font-semibold capitalize !text-[#E7E7E3] md:text-[20px] ${className}`}
    >
      {title}
    </Link>
  );
};
