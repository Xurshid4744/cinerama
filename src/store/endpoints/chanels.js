import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "api/baseUrl";

export const getChanels = createApi({
  reducerPath: `getChanels`,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (build) => ({
    getChanelTitle: build.query({
      query: () => ({
        url: `/content/online-tv/categories`,
        method: `GET`,
      }),
    }),
    getChanelCategory: build.query({
      query: (id) => ({
        url: `/content/online-tv/list?category_id=${id}&module_id=1`,
        method: `GET`,
      }),
    }),
  }),
});

export const { useGetChanelTitleQuery, useGetChanelCategoryQuery } = getChanels;
