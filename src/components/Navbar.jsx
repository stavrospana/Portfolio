import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

function Navbar() {
  const currentPage = useLocation().pathname;

  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");

    const handleNavbarToggle = () => {
      const targetId = navbarToggler.getAttribute("data-target");
      const targetElement = document.getElementById(targetId.slice(1));

      if (targetElement) {
        const expanded = targetElement.classList.contains("show");
        targetElement.classList.toggle("show", !expanded);
      }
    };

    navbarToggler.addEventListener("click", handleNavbarToggle);

    return () => {
      navbarToggler.removeEventListener("click", handleNavbarToggle);
    };
  }, []);

  return (
    <header className="navbarHeader">
      <BootstrapNavbar expand="lg" className="custom-navbar">
        <div className="container-fluid">
          <BootstrapNavbar.Toggle
            aria-controls="navbarNav"
            className="custom-toggler"
          />
          <BootstrapNavbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav className="navbar-nav">
              <Nav.Item>
                <Link
                  to="/"
                  className={`nav-link ${currentPage === "/" && "active"}`}
                >
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/Work"
                  className={`nav-link ${currentPage === "/Work" && "active"}`}
                >
                  Portfolio
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/Contact"
                  className={`nav-link ${currentPage === "/Contact" && "active"}`}
                >
                  Contact
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/Resume"
                  rel="noopener noreferrer"
                  className={`nav-link ${currentPage === "/Resume" && "active"}`}
                >
                  Resume
                </Link>
              </Nav.Item>
            </Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </BootstrapNavbar>
    </header>
  );
}

export default Navbar;
