import './index.scss';
import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projectsData';

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    let mounted = true;

    const fetchProjects = async () => {
      try {
        const res = await fetch('/projects.json');
        if (!res.ok) throw new Error('no projects');
        const items = await res.json();
        if (mounted && Array.isArray(items) && items.length > 0) setProjects(items);
      } catch (err) {
        // fallback to bundled data (projectsData) which is already set
      }
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="portfolio-main-layout">
      <div className="portfolio-left" style={{ display: 'none' }} />
      <div className="portfolio-right" style={{ width: '100%' }}>
        <div className="portfolio-content-zone">
          <h1 className="main-title">My Recent Work</h1>
          <p className="portfolio-intro">
            Here are a few past projects I've worked on. Want to see more?{' '}
            <a
              href="#contact"
              style={{ color: '#c04a4a', textDecoration: 'underline', fontWeight: 700 }}
            >
              Contact Me
            </a>
            .
          </p>
          <div className="portfolio-cards-wrapper">
            {projects.map((p, i) => (
              <ProjectCard
                key={p.id || i}
                title={p.title}
                desc={p.desc}
                tech={p.tech}
                demo={p.demo}
                github={p.github}
                image={p.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
