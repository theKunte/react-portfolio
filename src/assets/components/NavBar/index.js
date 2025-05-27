import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
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
        <div className={showNav ? 'nav-icons-center' : 'nav-icons-row'}>
          <a
            href="#home"
            onClick={() => setShowNav(false)}
            aria-label="Home"
            title="Home"
            style={{ marginRight: '32px' }}
          >
            <FontAwesomeIcon icon={faHome} color={iconColor} />
          </a>
          <a
            href="#portfolio"
            onClick={() => setShowNav(false)}
            aria-label="Portfolio"
            title="Portfolio"
            style={{ marginRight: '32px' }}
          >
            <FontAwesomeIcon icon={faSuitcase} color={iconColor} />
          </a>
          <a
            href="#contact"
            onClick={() => setShowNav(false)}
            aria-label="Contact"
            title="Contact"
            style={{ marginRight: '32px' }}
          >
            <FontAwesomeIcon icon={faEnvelope} color={iconColor} />
          </a>
          <a
            href="https://www.linkedin.com/in/jenny-kunte-seattle/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            style={{ marginRight: '32px' }}
          >
            <FontAwesomeIcon icon={faLinkedin} color={iconColor} />
          </a>
          <a
            href="https://github.com/theKunte"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} color={iconColor} />
          </a>
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
