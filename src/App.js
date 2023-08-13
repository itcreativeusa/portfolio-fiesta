import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import ProjectsAll from "./components/ProjectsAll";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMeWithProject />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/project-all" element={<ProjectsAll />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const AboutMeWithProject = () => {
  return (
    <div>
      <AboutMe />
    </div>
  );
};
export default App;
