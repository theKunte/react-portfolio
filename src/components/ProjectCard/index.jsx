import React from 'react';
import './index.css';

const ProjectCard = ({ title, desc, tech, demo, github, image }) => {
  const handleImageError = (e) => {
    e.target.src = `${import.meta.env.BASE_URL}portfolio/project1/one.png`;
  };

  return (
    <div className="portfolio-project-card">
      <div className="portfolio-image-wrapper small dice-style-image" aria-hidden={!!desc}>
        <img
          src={image}
          className="portfolio-image"
          alt={title || 'project'}
          onError={handleImageError}
        />
        <div className="portfolio-hover-info" aria-hidden="true">
          <h2 className="portfolio-title">{title}</h2>
          <p className="portfolio-description">{desc}</p>
          {tech && <p className="portfolio-info">{tech}</p>}
          <div className="portfolio-card-links">
            {demo && (
              <a className="portfolio-btn" href={demo} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
            {github && (
              <a className="portfolio-btn" href={github} target="_blank" rel="noopener noreferrer">
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
