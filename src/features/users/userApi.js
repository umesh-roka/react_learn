import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../constants/constants';




export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),


  endpoints: (builder) => ({


    getUsers: builder.query({
      query: (query) => ({
        url: '/users',
        method: 'GET'
      }),

    }),




  }),





});



export const { useGetUsersQuery } = userApi;