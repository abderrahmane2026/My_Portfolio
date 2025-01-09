import React from 'react';
import { FaCamera, FaVideo, FaCode, FaPaintBrush, FaDesktop } from 'react-icons/fa';
import './Aboutsection.css';
import myimg from "../../assets/my pictures/about.jpg"

export default function Aboutsection() {
  return (
    <div className="about-section">
      {/* Background Shape */}
      <div className="background-shape"></div>

      {/* Left side: Image */}
      <div className="about-image" data-aos="fade-right">
        <img src={myimg} alt="About Me" />
      </div>

      {/* Right side: Skills */}
      <div className="about-skills" data-aos="fade-left">
        <h2 className="section-title">About My Skills</h2>

        {/* New Paragraph */}
        <p className="about-description" data-aos="fade-up">
          I am passionate about creating stunning visuals and impactful designs. My journey includes mastering photography, videography, web development, and design. I continuously strive to deliver excellence through my creativity and technical skills.
        </p>

        <div className="skills-container">
          {/* Skill 1 */}
          <div className="skill" data-aos="zoom-in">
            <FaCamera className="skill-icon" />
            <div className="skill-details">
              <h3 className="skill-title">Photography</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}>90%</div>
              </div>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="skill" data-aos="zoom-in" data-aos-delay="100">
            <FaVideo className="skill-icon" />
            <div className="skill-details">
              <h3 className="skill-title">Videography</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}>80%</div>
              </div>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="skill" data-aos="zoom-in" data-aos-delay="200">
            <FaCode className="skill-icon" />
            <div className="skill-details">
              <h3 className="skill-title">Web Development</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}>85%</div>
              </div>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="skill" data-aos="zoom-in" data-aos-delay="300">
            <FaPaintBrush className="skill-icon" />
            <div className="skill-details">
              <h3 className="skill-title">UI/UX Design</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}>75%</div>
              </div>
            </div>
          </div>

          {/* Skill 5 */}
          <div className="skill" data-aos="zoom-in" data-aos-delay="400">
            <FaDesktop className="skill-icon" />
            <div className="skill-details">
              <h3 className="skill-title">Graphic Design</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '90%' }}>90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
