"use client";
import { useGetCommentsPostQuery, useGetPostQuery } from "@/store/services/postsApi";
import React from "react";
// import { BASE_URL } from "@/utils/constants";

const CommentsPostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = React.use(params);
  const { data: comments = [], isLoading, error } = useGetCommentsPostQuery(id);
  const { data: post  } = useGetPostQuery(id);

  if (isLoading) return <div>Loading comments...</div>;
  if (error) return <div>Error loading comments</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Comments for Post {id}</h1>
      <h2 className="text-center text-2xl font-bold">{post?.title}</h2>
      <h5 className="text-center text-xl">{post?.body}</h5>
      <ul className="mt-5">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="border p-4 mb-2"
          >
            <h2 className="text-lg font-semibold">{comment.name}</h2>
            <p className="text-gray-600">{comment.body}</p>
            <p className="text-sm text-gray-500">By: {comment.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPostPage;
