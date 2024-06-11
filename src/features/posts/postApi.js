import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker';
import { baseUrl } from '../../constants/constants';



export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl:baseUrl  }),


  endpoints: (builder) => ({


    getUserPost: builder.query({
      query: (user) => ({
        url: '/posts',
        method: 'GET',
        params: {
          userId: user.id
        }
      }),
      providesTags:(res,error,user)=>{
        return [{type:'UserPost', id:user.id}]

      }
    }),

   AddPost:builder.mutation({
    query:(user)=>({
      url:'/posts',
      body:{
        title:faker.music.songName(),
        userId:user.id,
        
      },
      method:'POST',
    
    }),
    invalidatesTags:(res,error,user)=>{
      return [{type:'UserPost', id:user.id}]

    },
   }),


   removePost:builder.mutation({
    query:(id)=>({
      url:`/posts/${id}`,
    
      method:'DELETE',
    
    }),
    invalidatesTags:(res,error,user)=>{
      return [{type:'UserPost', id:res.userId}]

    },
   })


  }),





});



export const { useGetUserPostQuery, useAddPostMutation,useRemovePostMutation } = postApi;