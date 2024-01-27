import React from "react";
import "./Skills.css"; // Import your CSS file for styling

function Skills() {
  const skills = [
    { name: "PYTHON", percentage: 80 },
    { name: "REACT", percentage: 75 },
    { name: "HTML,CSS", percentage: 90 },
    { name: "MACHINE LEARNING", percentage: 85 },
    // Add more skills as needed
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <ul className="skills-list">
        {skills.map((item, index) => (
          <li key={index} className="skill-item">
            <div className="skill-name">{item.name}</div>
            <div className="skill-bar" style={{ width: `${item.percentage}%` }}></div>
            <div className="skill-percentage">{item.percentage}%</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
