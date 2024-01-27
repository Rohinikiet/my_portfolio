// About.js
import React from "react";
import "./About.css"; // Import the CSS file
import about from './about.jpg'

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-photo">
          <img src={about} alt="about" />
        </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            My name is Udi Rohini, and I'm currently pursuing my B.Tech in the 3rd year with a specialization in Artificial Intelligence and Data Science.
            I have a strong passion for technology and data-driven solutions, and I'm enthusiastic about exploring the world of AI and its applications.
            In addition to my academic pursuits, I enjoy working on personal projects, staying updated with the latest trends in AI, and continuously expanding my knowledge in this field.
          </p>
          <p>
            Here are some additional details about me:
            - Hobbies: I love coding, reading, and exploring new technologies.
            - Favorite Programming Languages: Python , react , machine learning.
            - Achievements: I have participated in several hackathons and won awards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
