import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "api/baseUrl";
export const getMeApi = createApi({
  reducerPath: `getMe`,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Cinerama-Token", token);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getMe: build.query({
      query: () => ({
        url: `/auth/get-me`,
        method: `GET`,
      }),
    }),
    logout: build.query({
      query: () => ({
        url: `/auth/logout`,
        method: `GET`,
      }),
    }),
  }),
});
export const { useGetMeQuery, useLogoutQuery, useLazyLogoutQuery } = getMeApi;
