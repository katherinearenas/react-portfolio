import React from "react";
import "./style/Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A description of Project One.",
    link: "https://example.com/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A description of Project Two.",
    link: "https://example.com/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A description of Project Three.",
    link: "https://example.com/project-three",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="cards-container">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
