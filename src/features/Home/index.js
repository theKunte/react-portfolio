import './index.scss';
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
          <h2 className="home-job">Software Developer</h2>
          <p className="home-description">
            I design and build creative web applications with a focus on clean code, accessibility,
            and delightful user experiences.
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
    </section>
  );
};

export default Home;
