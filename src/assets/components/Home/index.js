import { Link } from 'react-router-dom'
import './index.scss'
import ProfileJ from '../../images/profile-j.png'

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
            I design and build creative web applications with a focus on clean
            code, accessibility, and delightful user experiences.
          </p>
          <div className="home-actions">
            <a href="#contact" className="home-btn primary">
              Contact Me
            </a>
            <Link to="/portfolio" className="home-btn secondary">
              View Projects
            </Link>
          </div>
        </div>
        <div className="home-image-wrapper">
          <img className="home-profile-pic" src={ProfileJ} alt="Profile" />
        </div>
      </div>
    </section>
  )
}

export default Home
