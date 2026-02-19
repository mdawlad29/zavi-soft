import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productService = createApi({
  reducerPath: "productService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => ({
        url: `/products`,
        method: "GET",
        cache: "no-cache",
      }),
      providesTags: ["products"],
    }),

    getSingleProduct: builder.query<any, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
        cache: "no-cache",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } =
  productService;
