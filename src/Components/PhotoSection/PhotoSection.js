import React from 'react';
import './PhotoSection.css';
import pic from "../../assets/pic/Mail sent-amico.png"
import { Link } from 'react-router-dom';

export default function PhotoSection() {
    return (
      <div className="photo-section">
        {/* Left Side: Images */}
        <div className="photo-gallery">
          <div className="photo-card">
            <img src={pic} alt="Photography 1" className="photo" />
           
          </div>
          <div className="photo-card">
            <img src={pic} alt="Photography 2" className="photo" />
           
          </div>
          <div className="photo-card">
            <img src={pic} alt="Photography 3" className="photo" />
            
          </div>
          <div className="photo-card">
            <img src={pic} alt="Photography 4" className="photo" />
           
          </div>
        </div>
  
        {/* Right Side: Content */}
        <div className="photo-content">
          <h2 className="photo-title">My Photography Skills</h2>
          <p className="photo-description">
            I specialize in capturing breathtaking moments through the lens. My photography journey encompasses a variety of styles, from portraiture to landscapes. I take pride in my attention to detail and ability to tell stories through images.
          </p>
          <Link to="/photos">
          <button className="photo-button">View More</button>
          </Link>
        </div>
      </div>
    );
  }
  