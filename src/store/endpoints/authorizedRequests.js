import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "api/baseUrl";
export const authorized = createApi({
  reducerPath: `authorized`,
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
    getChanelView: build.query({
      query: (id) => ({
        url: `/content/online-tv/play?channel_id=${id}&hash=2da36ba257c4cc166c71435d077f718a`,
        method: `GET`,
      }),
    }),
  }),
});
export const {useLazyGetChanelViewQuery} = authorized;
