import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import scrollToId from '../../utils/scrollTo';
// no React hooks required for this footer

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            <strong className="brand-name">Jenny Kunte</strong>
            <div className="brand-sub">Application Developer — Seattle, WA</div>
          </div>
          <div className="footer-social" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/jenny-kunte-seattle/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="footer-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            </a>
            <a
              href="https://github.com/theKunte"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              title="GitHub"
              className="footer-link"
            >
              <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-nav" aria-label="Footer navigation">
            <a
              href="/"
              className="footer-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('home');
              }}
            >
              Home
            </a>
            <div className="footer-nav-group">
              <a
                href="/portfolio"
                className="footer-nav-link footer-projects-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId('portfolio');
                }}
              >
                Projects
              </a>
            </div>
            <a
              href="#contact"
              className="footer-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('contact');
              }}
            >
              Contact
            </a>
          </nav>

          {/* legal links moved to footer bottom for visibility */}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-copy">&copy; {year} Jenny Kunte. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
