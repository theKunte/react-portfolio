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
    `${process.env.PUBLIC_URL}/portfolio/project1/one.png`;
  const id = raw.id || raw._id || raw.key || `p-${idx}`;
  
  // Ensure image path is correctly formatted
  let imagePath;
  if (!image) {
    // No image provided, use default
    imagePath = `${process.env.PUBLIC_URL}/portfolio/project1/one.png`;
  } else if (image.startsWith('http://') || image.startsWith('https://')) {
    // Already a full URL (e.g., Firebase Storage URL)
    imagePath = image;
  } else if (image.startsWith('/')) {
    // Absolute path - add PUBLIC_URL prefix
    imagePath = `${process.env.PUBLIC_URL}${image}`;
  } else {
    // Relative path - add PUBLIC_URL prefix with separator
    imagePath = `${process.env.PUBLIC_URL}/${image}`;
  }
  
  return { id, title, desc, tech, demo, github, image: imagePath };
};

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    let mounted = true;

    const fetchFromFirestore = async () => {
      try {
        console.log('📡 Fetching from Firestore...');
        const col = collection(db, 'portfolio');
        const snapshot = await getDocs(col);
        console.log(`📊 Firestore returned ${snapshot.docs.length} documents`);
        
        if (snapshot.docs.length === 0) {
          console.warn('⚠️ Firestore collection is empty');
          return false;
        }
        
        const docs = snapshot.docs.map((d, i) => {
          const rawData = { id: d.id, ...d.data() };
          console.log(`📄 Document ${i + 1}:`, rawData);
          return normalizeProject(rawData, i);
        });
        
        console.log('✨ Normalized Firestore data:', docs);
        
        if (mounted && Array.isArray(docs) && docs.length > 0) {
          setProjects(docs);
          return true;
        }
      } catch (err) {
        console.error('❌ Firestore fetch error:', err);
        console.error('Error details:', err.message);
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
      console.log('🔍 Starting to load projects...');
      const fromFs = await fetchFromFirestore();
      if (fromFs) {
        console.log('✅ Using Firestore data');
        return;
      }
      console.log('⚠️ Firestore data not available, trying public JSON...');
      const fromJson = await fetchFromPublicJson();
      if (fromJson) {
        console.log('✅ Using public JSON data');
        return;
      }
      console.log('⚠️ Using fallback local data from projectsData.js');
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
          <h2 className="skills-title">PROJECTS</h2>
          <p className="skills-subtitle">
            {' '}
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
