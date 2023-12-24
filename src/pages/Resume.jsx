import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiSequelize, SiExpress, SiMongodb } from "react-icons/si";

export default function Resume() {
  const fileUrl =
    "https://raw.githubusercontent.com/stavrospana/Portfolio/main/src/assets/documents/StavResume.pdf";

  const FrontendTechnologies = [
    { icon: <FaHtml5 size={30} />, name: "HTML" },
    { icon: <FaCss3Alt size={30} />, name: "CSS" },
    { icon: <IoLogoJavascript size={25} />, name: "JavaScript" },
    { icon: <DiJqueryLogo size={30} />, name: "jQuery" },
    { icon: <FaReact size={30} />, name: "React" },
  ];

  const BackendTechnologies = [
    { icon: <GrMysql size={30} />, name: "MySQL" },
    { icon: <SiSequelize size={30} />, name: "Sequelize" },
    { icon: <FaNodeJs size={30} />, name: "NodeJS" },
    { icon: <SiExpress size={30} />, name: "ExpressJS" },
    { icon: <SiMongodb size={30} />, name: "MongoDB" },
  ];

  return (
    <div id="skills-container" className="container">
      <div className="row">
        {/* Frontend Proficiency Card */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Frontend Technologies</h5>
              <ul className="list-unstyled">
                {FrontendTechnologies.map((tech, index) => (
                  <li key={index}>
                    {tech.icon} {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Backend Proficiency Card */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Backend Technologies</h5>
              <ul className="list-unstyled">
                {BackendTechnologies.map((tech, index) => (
                  <li key={index}>
                    {tech.icon} {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Download Link */}
      <div className="mt-5">
        <p>Resume available for download here:</p>
        <a
          href={fileUrl}
          download="StavResume.pdf"
          className="btn btn-primary"
          id="download-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
