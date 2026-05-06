import './index.css';

const skillsData = [
  {
    category: 'Languages',
    skills: [{ name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'Python' }],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Tailwind CSS' },
      { name: 'SCSS' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Prisma ORM' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    category: 'Auth & Cloud',
    skills: [{ name: 'Firebase Auth' }, { name: 'AWS' }, { name: 'Azure' }],
  },
  {
    category: 'DevOps & Tooling',
    skills: [{ name: 'Docker' }, { name: 'CI/CD (GitHub Actions)' }, { name: 'Git' }],
  },
  {
    category: 'AI / ML (Learning)',
    skills: [{ name: 'Hugging Face Agents' }, { name: 'AI Agents (Conceptual)' }],
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
      <p className="skills-subtitle">
        Here are the technologies I use to build accessible, intelligent web apps.
      </p>

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
