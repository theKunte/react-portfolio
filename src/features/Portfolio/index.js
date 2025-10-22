import './index.scss';
import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projectsData';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    let mounted = true;

    const fetchProjects = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'portfolio'));
        const items = snapshot.docs.map((doc) => {
          const data = doc.data() || {};
          return {
            id: doc.id,
            title: data.title || data.name || data.cover || '',
            desc: data.desc || data.description || data.info || '',
            tech: data.tech || data.info || '',
            demo: data.demo || data.url || '',
            github: data.github || '',
            image: data.image || data.cover || '/portfolio/project1/one.png',
          };
        });

        if (mounted && items.length > 0) {
          setProjects(items);
        }
      } catch (err) {
        // silently continue using local projectsData as fallback
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
