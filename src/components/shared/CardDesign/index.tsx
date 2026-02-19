import { Button, Typography } from "antd";
import Image from "next/image";

interface CardDesignProps {
  image: string;
  title: string;
  price: string;
  btnText: string;
  isNew?: boolean;
  isOffer?: boolean | string;
}

export const ProductCard = ({
  title,
  btnText,
  isNew,
  price,
  image,
  isOffer,
}: CardDesignProps) => {
  return (
    <div className="space-y-4">
      <div className="rounded-[28px] bg-white p-2 shadow">
        <div className="relative overflow-hidden rounded-[24px] bg-[#ECEEF0]">
          {isNew && (
            <div className="absolute left-0 top-0 rounded-br-[24px] bg-primary px-4 py-3 text-[12px] font-semibold text-neutral">
              New
            </div>
          )}

          {isOffer && (
            <div className="absolute left-0 top-0 rounded-br-[24px] bg-[#FFA52F] px-4 py-3 text-[12px] font-semibold text-[#232321]">
              {isOffer}
            </div>
          )}

          <div className="flex flex-col items-center justify-center">
            <Image
              src={image ?? "/images/product-demo-img.png"}
              alt="hero-img"
              width={302}
              height={334}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <Typography.Text className="block text-[24px] font-semibold leading-[100%] text-secondary">
        {title}
      </Typography.Text>

      <Button className="h-12 !w-full !bg-secondary px-[82px] uppercase !text-neutral">
        {btnText} - <span className="text-[#FFA52F]">{price}</span>
      </Button>
    </div>
  );
};
