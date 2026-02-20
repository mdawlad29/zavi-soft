"use client";

import { Button, Typography } from "antd";
import Image from "next/image";
import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { ProductPhotoGallery } from "./MobileViewProductDetailsPhotoGallery";
import { useGetSingleProductQuery } from "@/services/product.service";
import { useParams, useRouter } from "next/navigation";
import { Loader } from "../shared/Loader";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { RootState } from "@/app/redux/store";
import { setSelectedItems } from "@/app/redux/features/product/productSlice";
import { toast } from "react-toastify";
import ComponentLayout from "@/Layout/ComponentLayout";

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const colors = ["#253043", "#707E6E"];

interface ProductImage {
  img: string;
}

const ProductDetails = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;
  const dispatch = useAppDispatch();
  const { selectedItems } = useAppSelector((state: RootState) => state.product);
  const productId = Array.isArray(slug) ? slug[slug.length - 1] : slug;

  const { data, error, isLoading } = useGetSingleProductQuery(
    productId as string
  );

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(38);

  const handleSelectedItems = () => {
    if (!data || !selectedSize || !selectedColor) return;

    const item = {
      ...data,
      selectedColor,
      selectedSize,
      quantity: 1,
    };

    const currentItems = [...selectedItems];

    const existingIndex = currentItems.findIndex(
      (i) =>
        i.id === data.id &&
        i.selectedSize === selectedSize &&
        i.selectedColor === selectedColor
    );

    if (existingIndex >= 0) {
      currentItems[existingIndex] = {
        ...currentItems[existingIndex],
        quantity: currentItems[existingIndex].quantity + 1,
      };
    } else {
      currentItems.push(item);
    }

    dispatch(setSelectedItems(currentItems));
  };

  const handleByNow = () => {
    if (!selectedItems.length) {
      return toast.warn("Cart is empty");
    }

    router.push(`/cart`);
  };

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">Failed to load product</div>;

  return (
    <ComponentLayout className="!mb-[128px]">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* LEFT IMAGE GRID */}
        <div className="hidden lg:col-span-2 lg:block">
          <div className="grid grid-cols-2 gap-4 overflow-hidden rounded-[48px]">
            {data?.images?.map((img: ProductImage, index: number) => (
              <div key={index} className="bg-neutral">
                <Image
                  src={`${img}`}
                  alt="product"
                  width={429}
                  height={510}
                  className="h-[510px] w-[429px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="block lg:hidden">
          <ProductPhotoGallery data={data} />
        </div>

        {/* RIGHT SIDE INFO */}
        <div className="col-span-1">
          <span className="mb-4 block w-[106px] rounded-xl bg-blue-500 py-3 text-center text-xs font-semibold text-white">
            New Release
          </span>

          <Typography.Title
            level={2}
            className="!m-0 !mb-4 !text-[32px] !leading-[100%]"
          >
            {data?.title}
          </Typography.Title>

          <Typography.Text className="mb-8 block text-[24px] font-semibold leading-[100%] text-primary">
            ${data?.price}
          </Typography.Text>

          {/* COLOR SELECT */}
          <div className="mb-8">
            <Typography.Text className="mb-2 block text-[16px] font-semibold leading-[100%] text-[#232321]">
              COLOR
            </Typography.Text>

            <div className="flex items-center gap-3">
              {colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out ${
                    selectedColor === color
                      ? "h-12 w-12 border-2 border-[#232321] bg-white"
                      : "size-8 rounded-full border-transparent bg-[#707E6E]"
                  }`}
                >
                  <div
                    className={`size-8 rounded-full ${selectedColor === color ? "bg-[#253043]" : ""}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* SIZE SELECT */}
          <div>
            <Typography.Text className="mb-2 block text-[16px] font-semibold text-secondary">
              SIZE
            </Typography.Text>

            <div className="mb-8 flex flex-wrap gap-1">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border p-4 text-sm font-medium ${
                    selectedSize === size
                      ? "bg-secondary text-white"
                      : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-2">
              <Button
                type="primary"
                block
                className="h-12 !bg-secondary"
                disabled={!selectedSize || !selectedColor}
                onClick={handleSelectedItems}
              >
                ADD TO CART
              </Button>

              <Button className="h-12 !bg-secondary !text-white">
                <MdFavoriteBorder className="text-xl" />
              </Button>
            </div>

            <Button
              block
              onClick={handleByNow}
              className="h-12 !bg-primary !text-white"
            >
              BUY IT NOW
            </Button>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-2">
            <Typography.Text className="block text-[16px] font-semibold leading-[100%] text-secondary">
              ABOUT THE PRODUCT
            </Typography.Text>

            <Typography.Paragraph className="text-sm leading-[100%] text-secondary">
              Shadow Navy / Army Green
              <br />
              <br />
              This product is excluded from all promotional discounts and
              offers.
              <br />
              <br />
              Pay over time in interest-free installments with Affirm. Klarna or
              Afterpay.
              <br />
              Join adiClub to get unlimited free standard shipping, returns, &
              exchanges.
            </Typography.Paragraph>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default ProductDetails;
