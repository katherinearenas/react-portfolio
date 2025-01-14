import React from "react";
import "./style/portfolio.css";

const projects = [
  {
    id: 1,
    title: "GTNBRG",
    description: "A book club app created with my team using Node.JS, SQL, Express, and Express-Handlebars.",
    link: "https://gtnbrg-083z.onrender.com",
    github: "https://github.com/katherinearenas/gtnbrg"
  },
  {
    id: 2,
    title: "World Travellers",
    description: "A travel blog project with photo upload capabilities created with my team using MERN (Mongo DB, Express, React, Node.js)stack.",
    link: "https://travelblog-d8at.onrender.com",
    github: "https://github.com/Well-Find-Out/project3"
  },
  {
    id: 3,
    title: "E-commerce Backend",
    description: "A back-end for an e-commerce site. This application uses Express.JS, pg, and Sequelize, to build out a database of inventory of products, along with categories and tags to classify them.",
    link: "https://drive.google.com/file/d/15iQIO34j2KKZNpmjHYqk7yhUExWqSmlk/view",
    github: "https://github.com/katherinearenas/week-thirteen-challenge-karenas",
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
            <a href={project.github} target="_blank" rel="noopener noreferrer">View Github Repository</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
