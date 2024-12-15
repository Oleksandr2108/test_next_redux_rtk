"use client";

import Modal from "@/components/Modal/Modal";
import { useGetPostQuery, useGetPostsQuery } from "@/store/services/postsApi";
import { Post } from "@/types/posts";
import { skipToken } from "@reduxjs/toolkit/query";
import { useState } from "react";
import PostPage from "./[id]/page";
import PostItem from "@/components/PostItem/PostItem";

export const PostsPage = () => {
  const { data: posts = [], isLoading, error } = useGetPostsQuery();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handleCloseModal = () => setSelectedPostId(null);

  const { data: selectedPost, isLoading: isPostLoading } = useGetPostQuery(
    selectedPostId ?? skipToken,
    { skip: !selectedPostId }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Posts</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List posts</h1>

      <ul className="">
        {posts.map((post: Post) => (
          <li
            key={post.id}
            className=" mb-2 flex items-center justify-between w-[800px]"
          >
            <PostItem
              post={post}
              onClick={() => setSelectedPostId(post.id.toString())}
            />
          </li>
        ))}
      </ul>

      {selectedPostId && (
        <Modal onClose={handleCloseModal}>
          {isPostLoading ? (
            <div>Loading post...</div>
          ) : selectedPost ? (
            <PostPage
              params={{
                id: selectedPostId,
              }}
            />
          ) : (
            <div>Error loading post</div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default PostsPage;
