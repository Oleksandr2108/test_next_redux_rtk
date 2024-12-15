'use client'

import { AddPostForm } from "@/components/AddPostForm/AddPostForm";

const AddPostPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Post</h1>
      <AddPostForm />
    </div>
  )
}

export default AddPostPage;