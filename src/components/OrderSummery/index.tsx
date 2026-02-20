"use client";

import { Button, Col, Row, Select, Typography } from "antd";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/app/redux/hook";
import { setSelectedItems } from "@/app/redux/features/product/productSlice";
import { MdFavoriteBorder } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import ComponentLayout from "@/Layout/ComponentLayout";

const OrderSummery = () => {
  const dispatch = useAppDispatch();
  const { selectedItems } = useAppSelector((state) => state.product);

  // Update Quantity
  const handleQuantityChange = (
    id: string | number,
    color: string,
    size: string,
    quantity: number
  ) => {
    const updatedItems = selectedItems.map((item: any) => {
      if (
        item.id === id &&
        item.selectedColor === color &&
        item.selectedSize === size
      ) {
        return { ...item, quantity };
      }
      return item;
    });

    dispatch(setSelectedItems(updatedItems));
  };

  //  Update Size
  const handleSizeChange = (
    id: string | number,
    color: string,
    oldSize: string,
    newSize: string
  ) => {
    const updatedItems = selectedItems.map((item: any) => {
      if (
        item.id === id &&
        item.selectedColor === color &&
        item.selectedSize === oldSize
      ) {
        return { ...item, selectedSize: newSize };
      }
      return item;
    });

    dispatch(setSelectedItems(updatedItems));
  };

  // Remove Item
  const handleRemoveItem = (
    id: string | number,
    color: string,
    size: string
  ) => {
    const updatedItems = selectedItems.filter(
      (item: any) =>
        !(
          item.id === id &&
          item.selectedColor === color &&
          item.selectedSize === size
        )
    );

    dispatch(setSelectedItems(updatedItems));
  };

  const subtotal = selectedItems.reduce(
    (acc: number, item: any) =>
      acc + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  const delivery = selectedItems.length ? 6.99 : 0;
  const total = subtotal + delivery;

  return (
    <ComponentLayout className="!mb-[128px]">
      <Row gutter={[47, 47]} align={"middle"}>
        {/* LEFT */}
        <Col xs={24} lg={16}>
          <div className="mb-6">
            <Typography.Text className="mb-2 block text-[24px] font-semibold leading-[100%] text-secondary md:text-[32px]">
              Saving to celebrate
            </Typography.Text>

            <Typography.Text className="block text-[12px] font-semibold leading-[100%] text-secondary md:text-[16px]">
              Enjoy up to 60% off thousands of styles during the End of Year
              sale - while suppiles last. No code needed.
            </Typography.Text>
          </div>

          <div className="rounded-[24px] bg-white p-4 md:rounded-[32px] md:p-6">
            {selectedItems.length === 0 && (
              <p className="py-10 text-center text-[16px] font-medium text-red-500">
                Your cart is empty
              </p>
            )}

            {selectedItems.length !== 0 && (
              <div>
                <Typography.Text className="mb-2 block text-[24px] font-semibold leading-[100%] text-secondary md:text-[32px]">
                  Your Bag
                </Typography.Text>

                <Typography.Text className="mb-12 block text-[12px] font-semibold leading-[100%] text-secondary md:text-[16px]">
                  Items in your bag not reserved- check out now to make them
                  yours.
                </Typography.Text>
              </div>
            )}

            {selectedItems.map((item: any) => (
              <div
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className="mb-8 flex justify-between gap-4"
              >
                {/* Image */}
                <div className="relative h-24 w-24 flex-shrink-0">
                  <Image
                    src={
                      item?.images?.[0] ? item.images[0] : "/placeholder.png"
                    }
                    alt={item?.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-wrap md:flex-nowrap">
                  <div>
                    <Typography.Text className="text-[18px] font-semibold md:text-[22px]">
                      {item.title}
                    </Typography.Text>

                    <Typography.Text className="mb-3 block text-[14px] text-secondary">
                      {item.description?.length > 100
                        ? `${item.description?.slice(0, 100)}...`
                        : item.description}
                    </Typography.Text>

                    {/* Size & Quantity */}
                    <div className="flex gap-4">
                      <Select
                        value={item.selectedSize ?? "S"}
                        onChange={(val) =>
                          handleSizeChange(
                            item.id,
                            item.selectedColor,
                            item.selectedSize,
                            val
                          )
                        }
                        options={[
                          { label: "S", value: "S" },
                          { label: "M", value: "M" },
                          { label: "L", value: "L" },
                          { label: "XL", value: "XL" },
                          { label: "XXL", value: "XXL" },
                        ]}
                        className="w-20"
                      />

                      <Select
                        value={item.quantity || 1}
                        onChange={(val) =>
                          handleQuantityChange(
                            item.id,
                            item.selectedColor,
                            item.selectedSize,
                            val
                          )
                        }
                        options={[...Array(10)].map((_, i) => ({
                          label: i + 1,
                          value: i + 1,
                        }))}
                        className="w-20"
                      />
                    </div>

                    <div>
                      <Typography.Text className="block text-[24px] font-semibold text-primary md:hidden">
                        $
                        {(Number(item.price) || 0) *
                          (Number(item.quantity) || 1)}
                      </Typography.Text>
                    </div>

                    {/* Icons */}
                    <div className="mt-3 flex gap-4">
                      <Button
                        type="text"
                        icon={<MdFavoriteBorder className="text-xl" />}
                      />
                      <Button
                        type="text"
                        icon={<RiDeleteBin2Line className="text-xl" />}
                        onClick={() =>
                          handleRemoveItem(
                            item.id,
                            item.selectedColor,
                            item.selectedSize
                          )
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Typography.Text className="hidden w-20 text-[24px] font-semibold text-primary md:block">
                      $
                      {(Number(item.price) || 0) * (Number(item.quantity) || 1)}
                    </Typography.Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>

        {/* RIGHT */}
        <Col xs={24} lg={8}>
          <div className="rounded-[24px] bg-white p-4 md:rounded-[32px] md:bg-transparent md:p-0">
            <Typography.Text className="mb-6 block text-[24px] font-semibold">
              Order Summary
            </Typography.Text>

            <div className="mb-4 flex justify-between font-semibold">
              <span>Items ({selectedItems.length})</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="mb-4 flex justify-between font-semibold">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>

            <div className="mb-4 flex justify-between text-[20px] font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Button
              type="primary"
              block
              className="mt-4 h-12 !bg-black !text-white"
            >
              Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </ComponentLayout>
  );
};

export default OrderSummery;
