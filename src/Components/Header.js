import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="index.html">
        <i className="fa fa-futbol-o" style={{color: "green"}}></i>
        &nbsp;&nbsp;Top-Scorers
      </a>
    </nav>
  );
}

export default Header;
