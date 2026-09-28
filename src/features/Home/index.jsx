import './index.css';
import scrollToId from '../../utils/scrollTo';
import ProfileJ from '../../assets/images/profile-j.webp';

const experience = [
  { org: 'WildPeer', role: 'Founder & Software Engineer', dates: '2025 – now' },
  { org: 'BlueBridge Alliance', role: 'Software Engineer', dates: '2024' },
  { org: 'Floop Edu', role: 'Software Engineer Intern', dates: '2021' },
];

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-intro">
          <h1 className="home-title">
            Hi, I'm <span className="name">Jenny Kunte</span>
          </h1>
          <h2 className="home-job">Founder of WildPeer · Software Engineer</h2>
          <p className="home-description">
            I build full-stack products that help people share — tools, knowledge, and outdoor gear.
            Right now I'm building WildPeer, a trust-focused platform for sharing outdoor gear with
            peers.
          </p>
          <p className="home-status">
            <span className="home-status-dot" aria-hidden="true" />
            Open to SDE roles · Seattle / remote
          </p>
          <div className="home-actions">
            <a
              href="#contact"
              className="home-btn primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('contact');
              }}
            >
              Contact Me
            </a>
            <a
              href="#portfolio"
              className="home-btn secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('portfolio');
              }}
            >
              View Projects
            </a>
          </div>
          <ul className="home-experience" aria-label="Experience">
            {experience.map((x) => (
              <li key={x.org}>
                <span className="home-experience-org">{x.org}</span>
                <span className="home-experience-role">
                  {x.role} · {x.dates}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="home-image-wrapper">
          <img
            className="home-profile-pic"
            src={ProfileJ}
            alt="Illustrated portrait of Jenny Kunte"
          />
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-dot" />
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Home;
