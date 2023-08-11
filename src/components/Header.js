import React from "react";

// Here we import bootstrap for access to some additional styling
import "bootstrap/dist/css/bootstrap.min.css";
// Here we are importing a CSS file as a dependency
import "../styles/Style.css";

function Header() {
  return (
    <header className="header">
      <h1>Kateryna's Stetsenko Portfolio &#128640;</h1>
    </header>
  );
}

export default Header;
