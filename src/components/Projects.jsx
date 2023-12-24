import React, { useState } from "react";
import { projectList } from "../utils/projectList";
import {FaGithub} from "react-icons/fa";

const Projects = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="wrapper-container">
      {projectList.map((project, index) => (
        <div key={index} className="wrapper">
          <label
            onClick={() => handleCardClick(index)}
            className={`project-card ${openCardIndex === index ? "open" : ""}`}
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <div className="card-row">
            <div className="card-description">
                <h4>{project.projectName}</h4>
                <p>Techs: {project.projectDescription}</p>
                <a href={project.projectGithub} target="_blank" rel="noreferrer">
                <FaGithub size={40}></FaGithub>
                </a>
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Projects;
