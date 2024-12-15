import { Comments } from "@/types/comments";
import { Post } from "@/types/posts";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
    }),
    getCommentsPost: builder.query<Comments[], string>({
      query: (id) => `/posts/${id}/comments`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useGetCommentsPostQuery,
} = postsApi;
