import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/Blogpost";
import Homepage from "./pages/Homepage";
import About from "./pages/Aboutpage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
