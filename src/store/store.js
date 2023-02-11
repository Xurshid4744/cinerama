import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./endpoints/auth";
import { authorized } from "./endpoints/authorizedRequests";
import { getChanels } from "./endpoints/chanels";
import { getMeApi } from "./endpoints/get-me";
import { getMovies } from "./endpoints/movies";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [getMeApi.reducerPath]: getMeApi.reducer,
    [getMovies.reducerPath]: getMovies.reducer,
    [getChanels.reducerPath]: getChanels.reducer,
    [authorized.reducerPath]: authorized.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(getMeApi.middleware)
      .concat(getChanels.middleware)
      .concat(getMovies.middleware)
      .concat(authorized.middleware),
});
