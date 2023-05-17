import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "api/baseUrl";

export const filter = createApi({
  reducerPath: `filter`,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (build) => ({
    filter: build.query({
      query: () => ({
        url: `/content/prefer-filter`,
        method: `GET`,
      }),
    }),
  }),
});
export const { useFilterQuery } = filter;
