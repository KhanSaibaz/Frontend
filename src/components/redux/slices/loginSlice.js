import BaseApi from "../baseQuery/BaseApi";

const LoginApi=BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(Credential)=>({
                url:'/api/login',
                method:"POST",
                body:Credential
            })
        }),
        logout:builder.mutation({
            query:()=>({
                url:'/api/logout',
                method:"POST",
            })
        })
    })
})

export const {useLoginMutation,useLogoutMutation}=LoginApi