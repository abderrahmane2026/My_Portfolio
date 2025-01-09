import React from 'react';
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-description">Feel free to reach out to me through any of the platforms below!</p>

      <div className="contact-container">
        {/* Phone */}
        <div className="contact-item" data-aos="fade-up">
          <FaPhone className="contact-icon" />
          <div>
            <h3 className="contact-title">Phone</h3>
            <p className="contact-info">+123 456 7890</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
          <FaWhatsapp className="contact-icon" />
          <div>
            <h3 className="contact-title">WhatsApp</h3>
            <p className="contact-info">+123 456 7890</p>
          </div>
        </div>

        {/* Facebook */}
        <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
          <FaFacebook className="contact-icon" />
          <div>
            <h3 className="contact-title">Facebook</h3>
            <p className="contact-info">facebook.com/yourprofile</p>
          </div>
        </div>

        {/* Instagram */}
        <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
          <FaInstagram className="contact-icon" />
          <div>
            <h3 className="contact-title">Instagram</h3>
            <p className="contact-info">instagram.com/yourprofile</p>
          </div>
        </div>

        {/* Email */}
        <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
          <FaEnvelope className="contact-icon" />
          <div>
            <h3 className="contact-title">Email</h3>
            <p className="contact-info">youremail@example.com</p>
          </div>
        </div>

        {/* Location */}
        <div className="contact-item" data-aos="fade-up" data-aos-delay="500">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h3 className="contact-title">Location</h3>
            <p className="contact-info">123 Street Name, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}
