import React from "react";
import projects from "../../Data/websitedata.json"; // استيراد ملف JSON
import "./WebSection.css"; // Add CSS styling here or inline

const WebSection = () => {
  return (
    <div className="projects-gallery">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={`${project.title} screenshot`} 
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link} // رابط GitHub
                target="_blank" // فتح الرابط في نافذة جديدة
                rel="noopener noreferrer" // حماية من الهجمات (أفضل ممارسات)
                className="project-link"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* إضافة النص والزر أسفل المشاريع */}
      <div className="more-projects-section">
        <p>There are more projects you can explore!</p>
        <button
          className="load-more-button"
          onClick={() => alert("Load more functionality will be added soon!")}
        >
          Load More Projects
        </button>
      </div>
    </div>
  );
};

export default WebSection;
