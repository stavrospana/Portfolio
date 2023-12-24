// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className=" footer fixed-bottom p-4">
        <div className="social-icons">
          <a
            href="https://github.com/stavrospana"
            target="_blank"
            className="mx-3 icons"
            rel="noreferrer"
          >
            <FaGithub size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/stavros-panagiotopoulos-789a2a1b8/"
            target="_blank"
            className="mx-3 icons"
            rel="noreferrer"
          >
            <FaLinkedin size={50} />
          </a>
        </div>
        <div className="footer-content">
        </div>
      </div>
    </div>
  );
}
