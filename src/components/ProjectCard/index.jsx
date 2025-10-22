import React from 'react'
import './index.scss'

const ProjectCard = ({ title, desc, tech, demo, github, image }) => {
  return (
    <div className="portfolio-project-card">
      <div className="portfolio-image-wrapper small dice-style-image">
        <img src={image} className="portfolio-image" alt={title || 'project'} />
        <div className="portfolio-hover-info">
          <h2 className="portfolio-title">{title}</h2>
          <p className="portfolio-description">{desc}</p>
          {tech && <p className="portfolio-info">{tech}</p>}
          <div style={{ display: 'flex', gap: '8px', marginTop: 8 }}>
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
  )
}

export default ProjectCard
