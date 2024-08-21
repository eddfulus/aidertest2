"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

const dummyPosts: BlogPost[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post ${i + 1}`,
  excerpt: `This is a short excerpt for blog post ${
    i + 1
  }. Click to read more...`,
  content: `This is the full content of blog post ${
    i + 1
  }. It contains more detailed information about the topic. Jom pergi Melaka yo, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
}));

const POSTS_PER_PAGE = 5;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = dummyPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(dummyPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 border ${
                currentPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
}
