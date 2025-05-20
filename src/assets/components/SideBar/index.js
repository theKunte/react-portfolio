import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const iconColor = '#e2fcff'

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
        <div className={showNav ? 'nav-icons-center' : ''}>
          <NavLink
            to="/"
            onClick={() => setShowNav(false)}
            className={({ isActive }) => (isActive ? 'active' : '')}
            aria-label="Home"
            title="Home"
          >
            <FontAwesomeIcon icon={faHome} color={iconColor} />
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setShowNav(false)}
            className={({ isActive }) => (isActive ? 'active' : '')}
            aria-label="About"
            title="About"
          >
            <FontAwesomeIcon icon={faUser} color={iconColor} />
          </NavLink>
          <NavLink
            to="/portfolio"
            onClick={() => setShowNav(false)}
            className={({ isActive }) => (isActive ? 'active' : '')}
            aria-label="Portfolio"
            title="Portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} color={iconColor} />
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(false)}
            className={({ isActive }) => (isActive ? 'active' : '')}
            aria-label="Contact"
            title="Contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color={iconColor} />
          </NavLink>
        </div>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
          aria-label="Close navigation"
          title="Close navigation"
        />
      </nav>
      <ul className="social-links">
        <li>
          <a
            href="https://www.linkedin.com/in/jenny-kunte-seattle/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color={iconColor}
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/theKunte"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              color={iconColor}
              className={'anchor-icon'}
              style={{ minWidth: '20px', minHeight: '20px' }}
            />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color={iconColor}
        size="3x"
        className="hamburger-icon"
        aria-label="Open navigation"
        title="Open navigation"
      />
    </div>
  )
}

export default Navbar
