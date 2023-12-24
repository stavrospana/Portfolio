import React from "react";
import myPhoto from "../assets/images/profilephoto.jpg";
import { FaCode, FaDatabase, FaServer, FaToolbox } from "react-icons/fa";

export default function About() {
  return (
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-center align-items-center my-3">
        <h1 className="dev-name">Stavros Panagiotopoulos</h1>
        <ul className="d-flex flex-wrap list-inline" id="title">
          <li>Junior Developer</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-3 text-center">
          <img
            src={myPhoto}
            alt="My Photo"
            className="img-fluid profile-image"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="col-md-8">
          <section className="right-container text-left">
            <p>
              Welcome to my coding journey! I'm passionate about crafting
              innovative solutions and creating impactful digital experiences.
              With a strong foundation in JavaScript and its associated
              technologies, I navigate the coding landscape with finesse.
            </p>
            <p>
              <FaCode /> Frontend: Crafting captivating user interfaces with
              React and ensuring a seamless user experience.
            </p>
            <p>
              <FaServer /> Backend: Proficient in Express and Node.js for
              server-side development.
            </p>
            <p>
              <FaDatabase /> Databases: Expertise in both SQL (MySQL) and NoSQL
              (MongoDB).
            </p>
            <p>
              <FaToolbox /> Tools: Jest Jedi for robust testing, Handlebars for
              dynamic templating, and deployment finesse on Heroku.
            </p>
            <p>
              My coding journey is marked by continuous learning and a
              commitment to staying at the forefront of technology.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
