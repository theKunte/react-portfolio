import './index.scss';
import { useState, useEffect } from 'react';

const scrollToContact = (e) => {
  e.preventDefault();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`nav-bar${hideOnScroll ? ' nav-bar--hidden' : ''}`}>
      <div className="nav-sayhello-wrapper">
        <a
          href="#contact"
          className="sayhello-btn"
          aria-label="Say Hello"
          onClick={scrollToContact}
        >
          Say Hello{' '}
          <span className="wave-emoji" role="img" aria-label="Waving Hand">
            👋
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
