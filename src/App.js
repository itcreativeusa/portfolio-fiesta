import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <AboutMe />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
