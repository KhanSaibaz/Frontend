import BaseApi from "../baseQuery/BaseApi";

const LoginApi=BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(Credential)=>({
                url:'/api/login',
                method:"POST",
                body:Credential
            })
        })
    })
})

export const {useLoginMutation}=LoginApi