import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/About">About Me</Link>
        <div className="dropdown">
          <button className="dropbtn">My Services</button>
          <div className="dropdown-content">
            <Link to="/photos">Photography</Link>
            <Link to="/websites">Web Developer</Link>
          </div>
        </div>
      </nav>
      <button className="lang-btn">Language</button>
    </header>
  );
};

export default Header;
