import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import LogoSubtitle from '../../images/logo_sub.png'
import LogoS from '../../images/logo-j.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faUser,faEnvelope, faSuitcase, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
  
    return (
      <div className="nav-bar">
        <Link 
          className="logo"
          to="/"
          onClick={() => setShowNav(false)}>
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink 
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#ffd700" size="3x" className='close-icon' />
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/jenny-kunte-seattle/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"className="anchor-icon"/>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/theKunte"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e"className="anchor-icon"/>
            </a>
          </li>
        </ul>
        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#ffd700" size="3x" className='hamburger-icon' />
      </div>
    )
  }
  
  export default Sidebar
  