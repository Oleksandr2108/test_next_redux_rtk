"use client";

import { useAddPostMutation } from "@/store/services/postsApi";
import { useState } from "react";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [addPost, { isLoading, isSuccess, error }] = useAddPostMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addPost({ title, body }).unwrap();
      setTitle("");
      setBody("");
    } catch (err) {
      console.error("Failed to add post", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-lg font-semibold">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter title"
          required
        />
      </div>
      <div>
        <label htmlFor="body" className="block text-lg font-semibold">
          Body
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter body"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {isLoading ? "Adding..." : "Add Post"}
      </button>
      {isSuccess && <p className="text-green-500 mt-4">Post added successfully!</p>}
      {error && <p className="text-red-500 mt-4">Failed to add post. Try again.</p>}
    </form>
  );
};
