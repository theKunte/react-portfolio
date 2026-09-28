import React from 'react';
import './index.css';

const ProjectCard = ({ title, status, desc, tech, demo, github, image }) => {
  const handleImageError = (e) => {
    e.target.src = `${import.meta.env.BASE_URL}portfolio/project1/one.png`;
  };

  return (
    <article className="portfolio-project-card" aria-label={`${title} project`}>
      <div className="portfolio-image-wrapper small dice-style-image">
        <img
          src={image}
          className="portfolio-image"
          alt={`${title || 'project'} screenshot`}
          loading="lazy"
          onError={handleImageError}
        />
        {status && <span className="portfolio-status">{status}</span>}
        {/* Overlay on hover / keyboard focus; on touch screens it sits under the image */}
        <div className="portfolio-hover-info">
          <h3 className="portfolio-title">{title}</h3>
          <p className="portfolio-description">{desc}</p>
          {tech && <p className="portfolio-info">{tech}</p>}
          <div className="portfolio-card-links">
            {demo && (
              <a
                className="portfolio-btn"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} (opens in a new tab)`}
              >
                View Project
              </a>
            )}
            {github && (
              <a
                className="portfolio-btn"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub (opens in a new tab)`}
              >
                Source
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Title stays visible without hovering */}
      <div className="portfolio-caption" aria-hidden="true">
        {title}
      </div>
    </article>
  );
};

export default ProjectCard;
