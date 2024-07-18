import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <section className="project-detail">
      <h1>Project Detail</h1>
      <p>Details about project with ID: {id}</p>
    </section>
  );
};

export default ProjectDetail;
