'use client'

import { useGetPostQuery } from "@/store/services/postsApi";
import { notFound } from "next/navigation";

const PostPage = ({ params }: { params: { id: string } }) => {
  const { data: post, isLoading, error } = useGetPostQuery(params.id);

  if (isLoading) return <div>Завантаження...</div>;
  if (error || !post) return notFound(); 

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
      <p className="mt-4 text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostPage;
