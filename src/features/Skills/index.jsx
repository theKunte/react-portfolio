import './index.css';

const skillsData = [
  {
    category: 'Languages',
    skills: [{ name: 'TypeScript' }, { name: 'JavaScript' }, { name: 'Python' }],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'SCSS' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'PostgreSQL' },
      { name: 'Prisma ORM' },
      { name: 'Versioned REST APIs' },
    ],
  },
  {
    category: 'Auth & Security',
    skills: [
      { name: 'Firebase Auth' },
      { name: 'JWT' },
      { name: 'Role-based access control' },
      { name: 'Rate limiting & input sanitization' },
    ],
  },
  {
    category: 'Infra & DevOps',
    skills: [
      { name: 'Docker & Docker Compose' },
      { name: 'CI/CD (GitHub Actions)' },
      { name: 'Firebase Firestore' },
      { name: 'AWS' },
      { name: 'Azure' },
    ],
  },
  {
    category: 'Building with AI',
    skills: [
      { name: 'AI coding agents in my daily workflow' },
      { name: 'Prompt engineering' },
      { name: 'Hugging Face Agents' },
    ],
  },
];

const Skills = () => {
  const seen = new Set();
  const deduped = skillsData.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((s) => {
      const name = (s.name || '').trim();
      if (!name) return false;
      if (seen.has(name.toLowerCase())) return false;
      seen.add(name.toLowerCase());
      return true;
    }),
  }));

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">TECH SKILLS</h2>
      <p className="skills-subtitle">The tools I use to take products from idea to production.</p>

      <div className="skills-grid">
        {deduped.map((cat) => (
          <div className="skills-category-block" key={cat.category} data-aos="fade-up">
            <div className="skills-category-title">{cat.category}</div>
            <ul className="skills-list-block">
              {cat.skills.map((skill) => (
                <li key={skill.name}>
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-dot" />
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Skills;
