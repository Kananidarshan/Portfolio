import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  // Example project data (replace with your actual data)
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      image: "/images/project2.png",
      description:
        "A full-stack e-commerce website built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and checkout process.",
      link: "https://navrang-1nw3ne8p3-darshans-projects-5657f9d2.vercel.app/",
    },
    {
      id: 2,
      title: "Validation Form",
      image: "/images/Validation.png",
      description:
        "This is a validation Form , in this form i use many javascript function ,method , and many other things which is usefull for future coding journey.",
      link: "https://kdvalidation.netlify.app/",
    },
    {
      id: 3,
      title: "Space Renta",
      image: "/images/spacetenta.png",
      description:
        "This is a property booking web Application for rent and this is a application same like Airbnb Application .",
      link: "https://www.staging.spacerenta.com/",
    },
    {
      id: 4,
      title: "Portfolio Website",
      image: "/images/project2.png",
      description:
        "My personal portfolio website built using React.js and TailwindCSS. Showcases my skills, projects, and contact information in an attractive and user-friendly layout.",
      link: "https://navrang-1nw3ne8p3-darshans-projects-5657f9d2.vercel.app/",
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-gradient-to-r from-gray-600 to-gray-900 w-full text-white  flex flex-col items-center justify-center py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center my-5">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((detail) => (
            <div
              className="max-w-xs bg-gray-800 m-4 p-4 rounded-lg"
              key={detail.id}
            >
              <img
                src={detail.image}
                alt={detail.title}
                className="rounded-t-lg w-full h-48 object-fill"
              />
              <h3 className="text-xl font-bold mt-4">{detail.title}</h3>
              <p className="text-sm mt-2">{detail.description}</p>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4">
                <a href={detail.link} target="_blank" rel="noopener noreferrer">
                  View Details
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
