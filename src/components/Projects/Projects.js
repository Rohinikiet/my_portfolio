// Projects.js
import React from "react";
import "./Project.css"; // Import the CSS file

import project1Image from "./project1.jpeg";
import project3Image from "./project3.jpeg";
import project2Image from "./project2.jpeg";
import project4Image from "./project4.jpeg";
import project5Image from "./project5.jpeg";

const projects = [
  {
    title: "BMI CALCULATOR",
    description: "Creating a BMI (Body Mass Index) calculator using Flask involves building a web application that takes user input, performs calculations, and displays the BMI result.",
    link: "https://github.com/Rohinikiet/BMI_CALCULATOR",
    image: project1Image, // Add the URL to the image
  },
  {
    title: "STUDY HUB",
    description: "A 'Study Hub' that allows users to download study materials website designed to provide educational resources to students using MERN stack.",
    link: "https://github.com/Rohinikiet/MERN_PROJECT",
    image: project3Image,// Add the URL to the image
  },
  {
    title: "ANOMALY DETECTION",
    description: "Anomaly Online Fraud Detection is a technique or system used to identify unusual or unexpected patterns or behavior within a dataset, with the primary goal of detecting fraudulent activities or anomalous behavior. ",
    link: "https://github.com/Rohinikiet/online_fraud-detection_projectnest",
    image: project2Image, // Add the URL to the image
  },
  {
    title: "EXPENCE TRACKER",
    description: "An expense tracker is a tool or application that helps individuals or businesses keep track of their income and expenses. ",
    link: "https://github.com/Rohinikiet/K-HUB-project",
    image: project4Image, // Add the URL to the image
  },
  {
    title: "WORK-WISE-WAY",
    description: "the all-in-one platform designed to revolutionize your job search and amplify your career prospects. We understand the challenges of navigating today's competitive job market, which is why we've crafted a seamless experience tailored to your needs. ",
    link: "https://github.com/Rohinikiet/IIITH-INTERNSHIP",
    image: project5Image, // Add the URL to the image
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-box-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
