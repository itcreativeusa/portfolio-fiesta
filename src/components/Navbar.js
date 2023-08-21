import React from "react";
import { Link } from "react-router-dom";

const styles = {
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `url("./menu-bg.jpg")`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
    minHeight: "300px",
    lineHeight: "1.5",
    height: "300px",
    fontSize: "2rem",
    fontWeight: "600",
  },
};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/project-all">
              All projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume">
              My resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
