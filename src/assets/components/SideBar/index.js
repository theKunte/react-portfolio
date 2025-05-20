import './index.scss'
import { Link, NavLink } from 'react-router-dom'
// import LogoS from '../../images/logo-j.png'
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

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  const iconColor = '#e2fcff'

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}></Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          to="/"
          onClick={() => setShowNav(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <FontAwesomeIcon icon={faHome} color={iconColor} />
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setShowNav(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <FontAwesomeIcon icon={faUser} color={iconColor} />
        </NavLink>
        <NavLink
          to="/portfolio"
          onClick={() => setShowNav(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <FontAwesomeIcon icon={faSuitcase} color={iconColor} />
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setShowNav(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <FontAwesomeIcon icon={faEnvelope} color={iconColor} />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jenny-kunte-seattle/"
            target="_blank"
            rel="noreferrer"
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
          >
            <FontAwesomeIcon
              icon={faGithub}
              color={iconColor}
              className={'anchor-icon'}
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color={iconColor}
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
