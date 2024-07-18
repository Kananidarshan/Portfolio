import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <section className="blog-post">
      <h1>Blog Post</h1>
      <p>Content of the blog post with ID: {id}</p>
    </section>
  );
};

export default BlogPost;
