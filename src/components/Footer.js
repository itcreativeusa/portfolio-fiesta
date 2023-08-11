import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-solid-svg-icons"; // For envelope and phone
import {
  faLinkedin as fabLinkedin,
  faGithub as fabGithub,
} from "@fortawesome/free-brands-svg-icons"; // For LinkedIn and GitHub

const styles = {
  footer: {
    background: "#333",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
  },
  icon: {
    margin: "0 10px",
    color: "white",
    fontSize: "1.5rem",
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Contact me:</p>
      <a href="mailto:itcreativeusa@gmail.com" style={styles.icon}>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="tel:+4152318910" style={styles.icon}>
        <FontAwesomeIcon icon={faPhone} />
      </a>
      <a
        href="https://www.linkedin.com/in/katestetsenko/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.icon}
      >
        <FontAwesomeIcon icon={fabLinkedin} />
      </a>
      <a
        href="https://github.com/itcreativeusa/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.icon}
      >
        <FontAwesomeIcon icon={fabGithub} />
      </a>
    </footer>
  );
}

export default Footer;
