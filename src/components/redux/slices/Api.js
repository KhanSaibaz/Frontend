import { BaseApi } from "../baseQuery/BaseApi";

export const userApi=BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        getUsers: builder.query({
            query: () => "/users",
          }),

          getProduct:builder.query({
            query:()=>"./comments"
          }),
          getPhotos:builder.query({

            query:()=>"./photos"
          })
    })
})

export const {useGetUsersQuery,useGetProductQuery,useGetPhotosQuery} =userApi