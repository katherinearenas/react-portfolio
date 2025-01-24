import React from "react";
import "./style/about.css";

function About() {
  return (
    <div className="about-container">
       <h1>About Me</h1><img src="/images/katherineprofile.png" alt="Photo of Katherine" width="200px" height="200px"/> 
      <div className="about-content"> 
        <p>
          Hi, I’m Katherine Arenas, a full-stack web developer with a passion for creating dynamic and responsive web applications. With a certification from Northwestern University in Fullstack Web Development, I specialize in JavaScript, React, Node.js, MongoDB, and GraphQL and am always interested in learning more about programming tools and languages. My journey into tech was fueled by my love for problem-solving and a desire to bring ideas to life through code.
        </p>
        <p>
          Before I became a software developer, I earned my Juris Doctorate in Law at the University of Illinois College of Law in Champaign, IL. After passing the Illinois State Bar Exam in 2017, I was admitted to the Illinois Bar in 2017. I practiced law as a licensed attorney in Chicago Illinois mainly working in insurance litigation. I retired from law in 2022. As an attorney, I honed skills in research, writing, and collaboration. These experiences have enriched my approach to software development, allowing me to bring a unique perspective to exciting new projects.
        </p>
        <p>
          When I’m not coding, you can find me exploring my creative side by knitting, painting, crafting music, designing puzzle games, and diving into comic writing and illustration. I love hobbies that that spark the imagination. I’m always excited to learn new technologies, collaborate with like-minded individuals, and build solutions that make a difference.
        </p>
        <p>
          Let’s connect and create something amazing together!
        </p>
      </div>
    </div>
  );
}

export default About;
