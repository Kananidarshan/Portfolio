import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import About from "./pages/Aboutpage";
import Htmlblog from "./pages/Blogpage/Htmlblog";
import JavaScript from "./pages/Blogpage/JavaScript";
import ReactJs from "./pages/Blogpage/ReactJs";

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
          <Route path="/htmlblog" element={<Htmlblog />} />
          <Route path="/javascriptblog" element={<JavaScript />} />
          <Route path="/reactblog" element={<ReactJs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
