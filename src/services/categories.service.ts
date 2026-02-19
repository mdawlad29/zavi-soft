import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesService = createApi({
  reducerPath: "categoriesService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  keepUnusedDataFor: 0,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["categories"],
  endpoints: (builder) => ({
    getAllCategories: builder.query<any, void>({
      query: () => ({
        url: `/categories`,
        method: "GET",
        cache: "no-cache",
      }),
      providesTags: ["categories"],
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoriesService;
