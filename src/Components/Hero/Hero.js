import React from "react";
import "./Hero.css";
import heropic from "../../assets/my pictures/hero.png";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Discover my services and projects that bring your ideas to life.
        </p>
        <div className="hero-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heropic} alt="Hero Visual" />
      </div>
    </section>
  );
};

export default Hero;
