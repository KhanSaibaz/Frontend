import { BaseApi } from "../baseQuery/BaseApi"; 

export const UserApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = UserApi;
