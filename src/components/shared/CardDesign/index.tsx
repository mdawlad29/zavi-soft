import { Button, Rate, Typography } from "antd";
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
      <div className="rounded-[28px] bg-white p-2">
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
              src={image ?? "/images/fallback-img.png"}
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

export const ReviewCard = ({
  title,
  rating,
  userImg,
  desc,
  bannerImg,
}: {
  title: string;
  rating: number;
  userImg: string;
  desc: string;
  bannerImg: string;
}) => {
  return (
    <div className="overflow-hidden rounded-[24px] bg-white md:rounded-[32px]">
      <div className="p-4 md:p-8">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div>
            <Typography.Text className="mb-2 block text-[20px] font-semibold leading-[100%] text-secondary md:text-[24px]">
              {title}
            </Typography.Text>
            <Typography.Text className="block text-[14px] leading-[100%] text-secondary md:text-[16px]">
              {desc}
            </Typography.Text>
          </div>

          <div className="size-12 rounded-full md:size-16">
            <Image
              src={userImg ?? "/images/fallback-img.png"}
              alt="hero-img"
              width={64}
              height={64}
              className="size-full object-contain"
            />
          </div>
        </div>

        {/* Rating  */}
        <div className="flex items-center gap-2">
          <Rate defaultValue={rating} className="text-[#FFA52F]" />

          <span className="text-[16px] font-semibold text-secondary">5.00</span>
        </div>
      </div>

      <div>
        <Image
          src={bannerImg ?? "/images/fallback-img.png"}
          alt="review-img"
          width={429}
          height={325}
          className="object-contain"
        />
      </div>
    </div>
  );
};
