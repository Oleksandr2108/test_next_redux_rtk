/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
