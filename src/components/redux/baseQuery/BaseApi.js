  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

  export const BaseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://jsonplaceholder.typicode.com/",
      prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        return headers;
      },
    }),
    endpoints: () => ({}), 
  });

export default BaseApi;
