"use client";
import { Spin } from "antd";

export const Loader = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`absolute left-1/2 top-1/2 flex -translate-y-1/2 items-center justify-center ${className}`}
    >
      <Spin size="small" />
    </div>
  );
};
