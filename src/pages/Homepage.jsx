import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const ProjectDetails = [
    {
      id: 1,
      title: "Hardware Selling System",
      description: "This is my first project",
      img: "/images/project1.png",
    },
    {
      id: 2,
      title: "E-Commerce",
      description: "This is my second project",
      img: "/images/project2.png",
    },
    {
      id: 3,
      title: "Jivan Sandhya Oldage Home",
      description: "This is my third project",
      img: "/images/project1.png",
    },
    {
      id: 4,
      title: "E-Pharma",
      description: "This is my fourth project",
      img: "/images/project1.png",
    },
    {
      id: 5,
      title: "Hostel Management System",
      description: "This is my fifth project",
      img: "/images/project1.png",
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-800 w-full text-white  flex flex-col items-center justify-center py-4 ">
      {/* Hero Section */}
      <div className="text-center p-4 ">
        <h1 className="text-5xl font-bold my-8">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">
          Discover my projects, skills, and experience.
        </p>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          <Link to="/projects">View My Work</Link>
        </button>
      </div>

      {/* Profile Picture */}
      <div className="mt-12 p-4">
        <img
          src="/images/mypic.jpg"
          alt="Profile"
          className="rounded-full w-48 h-48 border-4 border-gray-700 object-cover"
        />
      </div>
      <p className="text-xl mt-6">I'm a professional Web Developer.</p>

      {/* About Me Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-8 px-8">
          I am a passionate web developer with experience in creating dynamic
          and responsive web applications using modern technologies. I love to
          learn and explore new things in the field of web development.
        </p>
      </div>

      {/* Projects Section */}
      <div className="mt-12 w-full px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="flex flex-wrap justify-center">
          {/* Example Project */}
          {ProjectDetails.map((detail) => (
            <div
              className="max-w-xs bg-gray-800 m-4 p-4 rounded-lg"
              key={detail.id}
            >
              <img
                src={detail.img}
                alt={detail.title}
                className="rounded-t-lg w-full h-48 object-fill"
              />
              <h3 className="text-xl font-bold mt-4">{detail.title}</h3>
              <p className="text-sm mt-2">{detail.description}</p>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4">
                <Link to={`/projects/${detail.id}`}>View Details</Link>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center pb-10">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg mb-8">
          Feel free to reach out to me for any collaboration or project
          inquiries.
        </p>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          <Link to="/contact">Contact Me</Link>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
