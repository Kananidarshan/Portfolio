import React from "react";
import htmlpdf from "../../assets/HTML_Handwritten_Notes.pdf";

const HTMLBlog = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 w-full text-white flex flex-col items-center justify-center py-4 px-2 md:px-4">
        <div className="text-2xl md:text-3xl font-bold py-6 text-[#66FCF1]">
          HTML Blog
        </div>
        <div className="max-w-4xl mx-auto pt-8 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Understanding HTML
          </h2>
          <p className="text-base md:text-lg mb-8">
            HTML is the standard markup language for creating web pages and web
            applications. It provides the structure and content for websites,
            while CSS and JavaScript handle the appearance and interactivity.
            HTML stands for HyperText Markup Language, and it's based on a set
            of tags and elements that define the different parts of a web page,
            such as headings, paragraphs, images, links, forms, and more.
            Learning HTML is crucial for anyone who wants to create their own
            websites or work with web development technologies.
          </p>
          <p className="text-base md:text-lg mb-8">
            In this blog post, we'll explore the basics of HTML, including its
            history, structure, and syntax. We'll also cover some of the most
            commonly used HTML elements and how to use them effectively in your
            web projects.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Commonly Used HTML Tags
          </h3>
          <ul className="list-disc ml-6 mb-6">
            <li className="text-base md:text-lg mb-3">
              <code className="p-1 text-white">{"<div>"}</code> : Defines a
              division or section in an HTML document.
            </li>
            <li className="text-base md:text-lg mb-3">
              <code className="p-1 text-white">{"<p>"}</code> : Represents a
              paragraph of text.
            </li>
            <li className="text-base md:text-lg mb-3">
              <code className="p-1 text-white">{"<img>"}</code> : Embeds an
              image in the document.
            </li>
            <li className="text-base md:text-lg mb-3">
              <code className="p-1 text-white">{"<a>"}</code> : Creates a
              hyperlink to other web pages, files, locations within the same
              page, email addresses, or any other URL.
            </li>
            <li className="text-base md:text-lg mb-3">
              <code className="p-1 text-white">{"<form>"}</code> : Represents an
              HTML form for user input.
            </li>
          </ul>
          <p className="text-base md:text-lg mb-8">
            Whether you're a beginner or an experienced developer, this post
            will give you a solid understanding of HTML and how it can be used
            to create powerful and engaging web experiences. Let's get started!
          </p>
          <div className="py-4">
            <a
              href={htmlpdf}
              download="html hand written notes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-slate-900 p-3 rounded-md hover:bg-slate-700 transition duration-300 ease-in-out"
              >
                Download PDF
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HTMLBlog;
