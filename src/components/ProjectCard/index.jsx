import React from 'react';
import './index.scss';

const ProjectCard = ({ title, desc, tech, demo, github, image }) => {
  const handleImageError = (e) => {
    console.error('Image failed to load:', image);
    console.error('Error event:', e);
    // Set a fallback image
    e.target.src = `${process.env.PUBLIC_URL}/portfolio/project1/one.png`;
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', image);
  };

  // Log the image URL when component renders
  React.useEffect(() => {
    console.log('ProjectCard image URL:', image);
  }, [image]);

  return (
    <div className="portfolio-project-card">
      <div className="portfolio-image-wrapper small dice-style-image" aria-hidden={!!desc}>
        <img 
          src={image} 
          className="portfolio-image" 
          alt={title || 'project'}
          onError={handleImageError}
          onLoad={handleImageLoad}
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
