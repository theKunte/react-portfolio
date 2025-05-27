import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <span>Contact: </span>
          <a href="mailto:j.k.c.seattle@gmail.com">j.k.c.seattle@gmail.com</a>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/jenny-kunte-seattle/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </a>
          <a
            href="https://github.com/theKunte"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Jenny Kunte. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
