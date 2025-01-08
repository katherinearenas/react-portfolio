import React from "react";
import "./style/home.css";
import { Link } from "react-router-dom";

function Home() {
  const pages = [
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <div className="cards-container">
        {pages.map((page, index) => (
          <div key={index} className="card">
            <h2>{page.name}</h2>
            <Link to={page.path} className="card-link">
              Visit {page.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
