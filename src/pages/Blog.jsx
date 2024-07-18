import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  // Example blog post data (replace with your actual data)
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      image: "/images/project1.png",
      date: "July 17, 2024",
      description:
        "React Hooks are functions that let you use state and other React features without writing a class. Learn how to use useState and useEffect hooks effectively in your React applications.",
    },
    {
      id: 2,
      title: "A Guide to TailwindCSS",
      image: "/images/project2.png",
      date: "June 25, 2024",
      description:
        "TailwindCSS is a utility-first CSS framework that makes it easy to build responsive and custom designs. Discover the power of utility classes and how to integrate TailwindCSS into your projects.",
    },
    // Add more blog posts as needed
  ];

  return (
    <section className="bg-gradient-to-r from-gray-600 to-gray-900 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <p className="text-sm mb-4">{post.description}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
