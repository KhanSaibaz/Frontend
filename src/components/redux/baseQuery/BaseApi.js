import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");

      const bearerAccessToken = getState().auth?.token;
      if (bearerAccessToken) {
        headers.set("Authorization", `Bearer ${bearerAccessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default BaseApi;
