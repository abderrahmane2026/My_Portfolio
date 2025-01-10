import React from "react";
import "./About.css";

const AboutMe = () => {
  return (
    <div className="about-me-page">
      {/* Section 1: Header */}
      <header className="about-header">
        <h1>Hello, I’m [Your Name]</h1>
        <p>
          A professional photographer, videographer, and web developer with 5 years of experience. Welcome to my portfolio!
        </p>
      </header>

      {/* Section 2: Photography Expertise */}
      <section className="expertise-section">
        <h2>Photography & Videography Expertise</h2>
        <div className="expertise-content">
          <p>
            I specialize in portrait photography, wedding videos, and post-production editing with color correction. With over 5 years of experience, I have mastered the art of using advanced photography equipment, lighting tools, and all related gear.
          </p>
          <ul>
            <li>Portrait Photography</li>
            <li>Wedding Videos</li>
            <li>Video Editing & Color Grading</li>
            <li>Expert in Photography Equipment & Lighting</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Tools & Software */}
      <section className="tools-section">
        <h2>Tools & Software</h2>
        <p>
          I am proficient in the following tools and software for photography, design, and web development:
        </p>
        <ul className="tools-list">
          <li>Adobe Premiere</li>
          <li>DaVinci Resolve</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Lightroom</li>
          <li>Adobe XD</li>
          <li>React.js</li>
          <li>Express.js</li>
        </ul>
      </section>

      {/* Section 4: Collaboration */}
      <section className="collaboration-section">
        <h2>Collaborations</h2>
        <p>
          Over the years, I have had the pleasure of collaborating with esteemed professors and renowned companies to deliver outstanding projects.
        </p>
      </section>

      {/* Section 5: Contact */}
      <section className="contact-section">
        <h2>Let’s Work Together!</h2>
        <p>
          Are you looking for a professional to capture your moments or build your next project? Let’s collaborate and bring your vision to life!
        </p>
        <button className="contact-button">Contact Me</button>
      </section>
    </div>
  );
};

export default AboutMe;
