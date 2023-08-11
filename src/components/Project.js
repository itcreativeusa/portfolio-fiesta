import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const cardData = [
  {
    title: "work-wiz",
    content:
      "This is a WorkWiz employee tracker, a command-line application that can be used to add, view & delete employees, roles and departments. Application uses Node.js, Inquirer, and MySQL to manage a company's employee database.",
    backgroundImage: "./img-1.jpg",
    githubLink: "https://github.com/itcreativeusa/work-wiz",
  },

  {
    title: "shop-nerd",
    content:
      "This is an e-commerce back end application that uses Express.js API and Sequelize to interact with a MySQL database. With this back end, users can easily add, update, and delete products, categories, and tags. The application uses Sequelize, an ORM tool that makes working with databases easier.",
    backgroundImage: "./img-2.jpg",
    githubLink: "https://github.com/itcreativeusa/shop-nerd",
  },
  {
    title: "you-better-readme",
    content:
      "This you-better-readme was created as a boot camp every week student challenge. It's a command-line node.js application that accepts user input for generating a readme file with the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.",
    backgroundImage: "./img-3.jpg",
    githubLink: "https://github.com/itcreativeusa/you-better-readme",
  },
  {
    title: "green-scribbles",
    content:
      "This is a Note Taker that can be used to write, save & delete notes. The application uses an Express.js back end and saves, and retrieves note data from a JSON file.",
    backgroundImage: "./img-4.jpg",
    githubLink: "https://github.com/itcreativeusa/green-scribbles",
  },
  {
    title: "text-me-jate",
    content:
      "Text-me Progressive Web Application is a text editor that runs in the browser and creates notes or code snippets with or without an internet connection. Application have an option to install as a Progressive Web Application.",
    backgroundImage: "./img-5.jpg",
    githubLink: "https://github.com/itcreativeusa/text-me-jate",
  },
  {
    title: "link-minds",
    content:
      "This is a link-minds an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. App use Express.js for routing, a MongoDB database, and the Mongoose ODM.",
    backgroundImage: "./img-6.jpg",
    githubLink: "https://github.com/itcreativeusa/link-minds",
  },
];

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  title: {
    minHeight: 50,
    fontSize: "1.5rem",
    color: "black",
    fontWeight: "600",
  },
  heading: {
    background: "#cc4499",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2rem",
    color: "white",
    padding: "0 20px",
    textAlign: "center",
  },
  content: {
    color: "black",
    fontWeight: "400",
    fontSize: "1.25rem",
    position: "relative",
    overflow: "hidden",
    boxSizing: "borderBox",
  },
  buttonContainer: {
    textAlign: "center",
  },
  seeAllButton: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#333",
    backgroundColor: "#98fb98",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "40px",
    transition: "background-color 0.3s",
  },
  seeAllButtonHover: {
    backgroundColor: "#70db70", // Change the background color on hover
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div style={styles.card}>
      <div style={styles.heading}>&#127799; Some of my projects &#127799;</div>
      <div className="row" style={{ margin: 20 }}>
        {cardData.map((card, index) => (
          <div key={index} className="col-md-6">
            <div
              className="card mb-4"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/${card.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-body" style={{ height: 400, padding: 50 }}>
                <h5 className="card-title" style={styles.title}>
                  {card.title}
                </h5>
                <p className="card-text" style={styles.content}>
                  {card.content}
                </p>
                <a
                  href={card.githubLink}
                  className="btn btn-primary"
                  id="githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.buttonContainer}>
        <button
          className="see-all-button"
          style={{
            ...styles.seeAllButton,
            ...(hoveredIndex === "seeAllButton" && styles.seeAllButtonHover), // Apply hover styles
          }}
          onMouseEnter={() => setHoveredIndex("seeAllButton")}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          See All Projects
        </button>
      </div>
    </div>
  );
}
export default Project;
