"use client";

import { Post } from "@/types/posts";
import Link from "next/link";

interface PostItemProps {
  post: Post;
  onClick: (id: string) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onClick }) => {
  return (
    <>
      <h2
        className="border-2 cursor-pointer"
        // onClick={() => setSelectedPostId(post.id.toString())}
        onClick={() => onClick(post.id.toString())}
      >
        #{post.id} {post.title}
      </h2>
      <Link
        href={`/posts/${post.id}/comments`}
        className="border-2"
      >
        Detail info
      </Link>
    </>
  );
};

export default PostItem;
