import './index.scss';

const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'Python' },
      { name: 'MySQL' },
    ],
  },
  {
    category: 'Frameworks / Libraries',
    skills: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'jQuery' },
      { name: 'Bootstrap' },
      { name: 'React Native' },
      { name: 'Redux' },
    ],
  },
  {
    category: 'Software / Tools',
    skills: [
      { name: 'Git' },
      { name: 'Figma' },
      { name: 'Firebase' },
      { name: 'AWS' },
      { name: 'Azure' },
    ],
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
  return (
    <section className="skills-section" id="skills">
      <div className="skills-title">TECH SKILLS</div>
      <div className="skills-subtitle">tech skills.</div>
      <div className="skills-grid">
        {skillsData.map((cat) => (
          <div className="skills-category-block" key={cat.category}>
            <div className="skills-category-title">{cat.category}</div>
            <ul className="skills-list-block">
              {cat.skills.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
