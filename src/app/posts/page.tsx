"use client";

import Modal from "@/components/Modal/Modal";
import { useGetPostQuery, useGetPostsQuery } from "@/store/services/postsApi";
import { Post } from "@/types/posts";
import { skipToken } from "@reduxjs/toolkit/query";
import { useState } from "react";
import PostPage from "./[id]/page";
import PostItem from "@/components/PostItem/PostItem";
import { useSelector } from "react-redux";
import {
  selectedCurrentPage,
  selectedPostsPerPage,
} from "@/store/slices/paginationSlice";
import { Pagination } from "@/components/Pagination/Pagination";

export const PostsPage = () => {
  const currentPage = useSelector(selectedCurrentPage);
  const postsPerPage = useSelector(selectedPostsPerPage);
  
  const { data: posts = [], isLoading, error } = useGetPostsQuery();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handleCloseModal = () => setSelectedPostId(null);

  const { data: selectedPost, isLoading: isPostLoading } = useGetPostQuery(
    selectedPostId ?? skipToken,
    { skip: !selectedPostId }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Posts</div>;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List posts</h1>

      <ul className="">
        {currentPosts.map((post: Post) => (
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default PostsPage;
