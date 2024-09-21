import React from "react";
import about from "../styles/about.module.css";

const AboutMePage = () => {
  return (
    <div className={about.container}>
      <h1>[Your Legal Name]</h1>
      <img
        src="[URL to your head and shoulders image]"
        alt="Headshot of [Your Name]"
        className="profile-image"
      />
      <p>
        [A short paragraph about who you are. Keep it professional and concise.]
      </p>
      <a
        href="[URL to your PDF Resume]"
        className="resume-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </a>
    </div>
  );
};

export default AboutMePage;
