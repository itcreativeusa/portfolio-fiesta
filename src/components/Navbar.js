import React from "react";
import { Link } from "react-router-dom";
// styles for the navibar
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
// navbar component with links to other pages
function Navbar() {
  return (
    <div style={styles.heading}>
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
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
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
