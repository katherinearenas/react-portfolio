import React from "react";
import "./style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="https://www.linkedin.com/in/katherine-arenas-a629ab337" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/katherinesaesthetic" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        {/* <a href="https://www.katherinesaesthetic.com" target="_blank" rel="noopener noreferrer">
          Art Portfolio add back in when deployed
        </a> */}
        <a href="https://github.com/katherinearenas" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </footer>
  );
}

export default Footer