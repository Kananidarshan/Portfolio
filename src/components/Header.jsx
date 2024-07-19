import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../style.css";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Projects", link: "/projects" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Contact", link: "/contact" },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up by resetting the overflow when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  return (
    <header className="bg-gradient-to-r from-gray-600 to-gray-900 text-white p-4 fixed w-full z-10">
      <nav className="flex justify-between items-center px-5">
        <div className="flex justify-center items-center gap-3 text-xl font-bold">
          <Link to="/">
            <img
              src="/images/portfoliologo.jpg"
              alt="profilepic"
              className="w-8 h-8 rounded-full"
            />
          </Link>
          <Link to="/" className="hidden md:block">
            My Portfolio
          </Link>
        </div>
        {/* Drawer Button for Small and Medium Screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDrawer}
            className="flex items-center gap-2 py-2"
          >
            <IoMdMenu className="text-2xl" />
          </button>
        </div>
        <div className="hidden md:flex  space-x-4 font-semibold leading-4">
          <Link to="/" className="hover:bg-slate-400 p-2 rounded-md">
            Home
          </Link>
          <Link to="/about" className="hover:bg-slate-400 p-2 rounded-md">
            About
          </Link>
          <Link to="/projects" className="hover:bg-slate-400 p-2 rounded-md">
            Projects
          </Link>
          <Link to="/blog" className="hover:bg-slate-400 p-2 rounded-md">
            Blog
          </Link>
          <Link to="/contact" className="hover:bg-slate-400 p-2 rounded-md">
            Contact
          </Link>
        </div>
      </nav>
      {/* Drawer Menu */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header container px-7 py-3">
          <h2 className="text-white font-semibold">Menu</h2>
          <button onClick={closeDrawer} className="font-semibold text-black">
            <IoClose className="text-white" />
          </button>
        </div>
        <div className="drawer-content">
          <ul>
            {Menu.map((item) => (
              <li key={item.id}>
                <Link
                  className="inline-block w-full rounded-md p-2 font-semibold text-white hover:bg-gray-500 hover:text-black"
                  to={item.link}
                  onClick={closeDrawer}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <h1 className="w-full bg-primary/40 rounded-md inline-block text-center py-2 text-white font-semibold mt-2">
            Get in touch
          </h1>
        </div>
      </div>
      <div
        className={`drawer-overlay ${isDrawerOpen ? "open" : ""}`}
        onClick={closeDrawer}
      ></div>
    </header>
  );
};

export default Header;
