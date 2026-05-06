import './index.css';
import scrollToId from '../../utils/scrollTo';
import ProfileJ from '../../assets/images/profile-j.png';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-intro">
          <h1 className="home-title">
            Hi, I'm <span className="name">Jenny Kunte</span>
          </h1>
          <h2 className="home-job">Full-Stack Developer</h2>
          <p className="home-description">
            I'm a Seattle-based Full-Stack Developer who builds responsive, accessible React
            applications — and takes them full-stack when the problem calls for it. I care about
            clean code, real test coverage, and shipping features that work in production.
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
        </div>
        <div className="home-image-wrapper">
          <img className="home-profile-pic" src={ProfileJ} alt="Profile" />
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
