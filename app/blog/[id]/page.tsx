'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
}

const dummyPosts: BlogPost[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post ${i + 1}`,
  content: `This is the full content of blog post ${i + 1}. It contains more detailed information about the topic. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
}));

export default function BlogPost() {
  const params = useParams();
  const postId = Number(params.id);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      const foundPost = dummyPosts.find(p => p.id === postId);
      setPost(foundPost || null);
      setIsLoading(false);
    }, 500);
  }, [postId]);

  if (isLoading) {
    return <div className="max-w-4xl mx-auto px-4 py-8">Loading...</div>;
  }

  if (!post) {
    return <div className="max-w-4xl mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
