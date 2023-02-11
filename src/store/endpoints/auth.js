import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "api/baseUrl";
export const authApi = createApi({
  reducerPath: `auth`,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (build) => ({
    registr: build.mutation({
      query: (body) => ({
        url: `/auth/telephone/code`,
        method: `POST`,
        body: body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: `/auth/login`,
        method: `POST`,
        body: body,
      }),
    }),
    confirm: build.mutation({
      query: (body) => ({
        url: `/auth/telephone/confirm`,
        method: `POST`,
        body: body,
      }),
    }),
  }),
});
export const {
  useRegistrMutation,
  useConfirmMutation,
  useLoginMutation,
} = authApi;
