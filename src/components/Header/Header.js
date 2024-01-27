// Header.js
import React from "react";
import "./Header.css"; // Import the CSS file
import profilePhoto from "./rohini.jpg"; // Import your profile photo
import LinkedInLogo from './linkdin.jpeg';
import GitHubLogo from './github.jpeg';
import youtubeubLogo from './youtube.jpeg'

function Header() {

  const linkedInUrl = 'https://www.linkedin.com/in/udi-rohini-55843a246';
  const githubUrl = 'https://github.com/Rohinikiet';
  const youtubeUrl = 'https://youtube.com/@udirohini3753?si=UQsS6Nl39xPhnehs';
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <header className="header">
      <div className="header-content">
        <div className="header-info">
          <div className="header-text">
            <h3 className="header-title">Hello,</h3>
            <h3 className="header-title">I'm ROHINI</h3>
            <p className="header-subtitle">Web Development</p>
            <p className="header-description">
            I'm a passionate web developer with expertise in front-end technologies such as HTML, CSS, and JavaScript and also familiar in react and machine leaning. I have a strong foundation in building responsive and user-friendly websites that deliver exceptional user experiences.
            </p>
          </div>
          <img
            src={profilePhoto}
            alt="Your Name"
            className="header-profile-photo"
          />
            <div className="header-buttons">
          <button
            className="header-link"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="header-link"
            onClick={() => scrollToSection("skills")} // Update to "skills"
          >
            Skills
          </button>
          <button
            className="header-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
          <button
            className="header-link"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
        </div>
        </div>
      </div>
      <footer className="footer-content">
        {/* LinkedIn */}
        <div className="social-link">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn" />
          </a>
        </div>
        {/* GitHub */}
        <div className="social-link">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={GitHubLogo} alt="GitHub" />
          </a>
        </div>
         {/* GitHub */}
         <div className="social-link">
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <img src={youtubeubLogo} alt="youtube" />
          </a>
        </div>
      </footer>
    </header>
  );
}

export default Header;
