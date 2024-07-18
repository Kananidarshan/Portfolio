import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="mt-6 flex gap-2 justify-center items-center">
          <a href="https://linkedin.com" target="_blank" className="mx-2">
            <FaLinkedin />
          </a>
          <a href="https://github.com" className="mx-2">
            <FaGithub />
          </a>
          <a href="https://twitter.com" className="mx-2">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
