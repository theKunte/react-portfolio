import { Link } from 'react-router-dom'
import './index.scss'
import ProfileJ from '../../images/profile-j.png'

const Home = () => {
  return (
    <>
      <div className="home-main-layout">
        <div className="home-left">
          <img className="profilePic" src={ProfileJ} alt="Profile" />
        </div>
        <div className="home-right">
          <div className="text-zone">
            <h1 className="main-title">
              Hi, I'm <span className="name">Jenny Kunte</span>
            </h1>
            <h2 className="job-title">Web Developer</h2>
            <div className="subtitle">
              From Espresso Artistry to Code Craftsmanship:
              <br />
              Brewing Innovation with a BA in Application Development
            </div>
            <div className="button-row">
              <a href="#contact" className="flat-button">
                CONTACT ME
              </a>
              <Link to="/portfolio" className="flat-button alt">
                PROJECTS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
