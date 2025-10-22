import './index.scss';
import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import scrollToId from '../../utils/scrollTo';
import projectsData from '../../data/projectsData';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';

// normalize different data shapes into the shape expected by ProjectCard
const normalizeProject = (raw = {}, idx) => {
  // possible keys for description
  const title = raw.title || raw.name || raw.projectName || `Project ${idx + 1}`;
  const desc = raw.desc || raw.description || raw.overview || raw.summary || '';
  const tech = raw.tech || raw.technologies || raw.stack || raw.tags || '';
  const demo = raw.demo || raw.link || raw.url || raw.projectUrl || raw.live || '';
  const github = raw.github || raw.repo || raw.repository || raw.source || '';
  const image =
    raw.image ||
    raw.img ||
    raw.imageUrl ||
    raw.picture ||
    raw.photo ||
    '/portfolio/project1/one.png';
  const id = raw.id || raw._id || raw.key || `p-${idx}`;
  return { id, title, desc, tech, demo, github, image };
};

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    let mounted = true;

    const fetchFromFirestore = async () => {
      try {
        const col = collection(db, 'portfolio');
        const snapshot = await getDocs(col);
        const docs = snapshot.docs.map((d, i) => normalizeProject({ id: d.id, ...d.data() }, i));
        if (mounted && Array.isArray(docs) && docs.length > 0) {
          setProjects(docs);
          return true;
        }
      } catch (err) {
        // Firestore not available or permission denied — fall through to next source
      }
      return false;
    };

    const fetchFromPublicJson = async () => {
      try {
        const res = await fetch('/projects.json');
        if (!res.ok) throw new Error('no projects');
        const items = await res.json();
        const normalized = Array.isArray(items)
          ? items.map((it, i) => normalizeProject(it, i))
          : [];
        if (mounted && normalized.length > 0) {
          setProjects(normalized);
          return true;
        }
      } catch (err) {
        // ignore
      }
      return false;
    };

    const loadProjects = async () => {
      const fromFs = await fetchFromFirestore();
      if (fromFs) return;
      const fromJson = await fetchFromPublicJson();
      if (fromJson) return;
      // fallback: normalize bundled data and set
      const normalized = projectsData.map((p, i) => normalizeProject(p, i));
      if (mounted) setProjects(normalized);
    };

    loadProjects();

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
              onClick={(e) => {
                e.preventDefault();
                scrollToId('contact');
              }}
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
