import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Aboutpage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-900 text-white  flex flex-col items-center justify-center w-full py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <img
          src="/images/mypic.jpg"
          alt="Profile"
          className="rounded-full w-48 h-48 border-4 border-gray-700 mx-auto mb-8 object-cover"
        />
        <h2 className="text-3xl font-bold mb-4">Kanani Darshan</h2>
        <p className="text-lg mb-8 font-semibold">
          Hi, I'm Kanani Darshan, a passionate web developer based in Ahmadabad.
          I specialize in creating dynamic and responsive web applications using
          modern technologies like React.js, Nextjs and many more..
        </p>
        <p className="text-lg mb-8 font-semibold">
          I have a strong foundation in front-end development with expertise in
          HTML, CSS, JavaScript, and various CSS frameworks like TailwindCSS and
          Bootstrap. I enjoy solving complex problems and turning ideas into
          functional and user-friendly websites.
        </p>
        <p className="text-lg mb-8 font-semibold">
          When I'm not coding, you can find me exploring new technologies,
          playing guitar, or hiking in the mountains.
        </p>
        <div className="mt-6 flex gap-2 justify-center items-center">
          <a
            href="www.linkedin.com/in/kanani-darshan-485248246"
            target="_blank"
            className="mx-2"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/Kananidarshan"
            target="_blank"
            className="mx-2"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://twitter.com" target="_blank" className="mx-2">
            <FaTwitter className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
