import './index.scss';

const skillsData = [
  {
    category: 'Languages',
    skills: [{ name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'Python' }],
  },
  {
    category: 'Frameworks / Libraries',
    skills: [{ name: 'React, React Native' }, { name: 'Node.js' }, { name: 'Express.js' }],
  },
  {
    category: 'Software / Tools',
    skills: [{ name: 'Firebase' }, { name: 'AWS' }, { name: 'Azure' }],
  },
  {
    category: 'Operating System',
    skills: [{ name: 'Windows' }, { name: 'Linux' }],
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
    </section>
  );
};

export default Skills;
