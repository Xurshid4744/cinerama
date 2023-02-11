import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { filmsUrl } from "api/baseUrl";

export const getMovies = createApi({
  reducerPath: `getMovies`,
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001/`,
  }),
  endpoints: (build) => ({
    films: build.query({
      query: (id) => ({
        url: `/content/${id}`,
        method: `GET`,
      }),
    }),
  }),
});
export const { useFilmsQuery } = getMovies;
