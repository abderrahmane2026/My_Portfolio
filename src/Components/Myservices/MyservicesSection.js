import React from 'react';
import { FaCamera, FaDesktop, FaPalette, FaVideo } from 'react-icons/fa';  // Import the icons
import './MyservicesSection.css';

export default function MyservicesSection() {
  return (
    <div className="services-section">
      <h2 className="section-title">My Skills</h2>
      <p className='section-subtitle'>
        Crafting creativity into impactful visuals and functional designs
      </p>

      <div className="cards-container">
        {/* Photography and Videography Card */}
        <div className="service-card">
          <FaCamera className="card-icon" />
          <h3 className="card-title">Photography & Videography</h3>
          <p className="card-description">
            Skilled in professional photography and videography, using the latest equipment to create high-quality images and videos.
          </p>
        </div>

        {/* Web Development Card */}
        <div className="service-card">
          <FaDesktop className="card-icon" />
          <h3 className="card-title">Web Development</h3>
          <p className="card-description">
            Building modern websites using technologies like React, HTML, and CSS.
          </p>
        </div>

        {/* UI/UX Design Card */}
        <div className="service-card">
          <FaPalette className="card-icon" />
          <h3 className="card-title">UI/UX Design</h3>
          <p className="card-description">
            Creating intuitive and visually appealing user interfaces with a focus on user experience.
          </p>
        </div>

        {/* Graphic Design Card */}
        <div className="service-card">
          <FaPalette className="card-icon" />
          <h3 className="card-title">Graphic Design</h3>
          <p className="card-description">
            Creative and unique design using tools like Photoshop and Illustrator.
          </p>
        </div>
      </div>
    </div>
  );
}
