"use client";
import { useParams } from "next/navigation";

export const pathname = () => {
  const params = useParams();
  const pathname = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug || "/";

  return pathname;
};
