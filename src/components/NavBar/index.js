import './index.scss';
import { useState, useEffect, useRef } from 'react';
import scrollToId from '../../utils/scrollTo';

const scrollToContact = (e) => {
  e.preventDefault();
  scrollToId('contact');
};

const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const idleTimer = useRef(null);

  useEffect(() => {
    const IDLE_MS = 400;

    const onActivity = () => {
      // show hidden state while activity continues
      setHideOnScroll(true);

      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        setHideOnScroll(false);
        idleTimer.current = null;
      }, IDLE_MS);
    };

    const onKey = (e) => {
      // treat arrow/page keys as activity that should hide the nav
      const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '];
      if (keys.includes(e.key)) onActivity();
    };

    // DOM events
    window.addEventListener('scroll', onActivity, { passive: true });
    window.addEventListener('wheel', onActivity, { passive: true });
    window.addEventListener('touchmove', onActivity, { passive: true });
    window.addEventListener('keydown', onKey, { passive: true });

    // try to attach to locomotive-scroll if available
    const container = document.querySelector('#main-scroll');
    const loco = (container && container.__locoInstance) || window.locomotiveInstance;
    if (loco && typeof loco.on === 'function') {
      try {
        loco.on('scroll', onActivity);
      } catch (err) {
        // ignore
      }
    }

    return () => {
      window.removeEventListener('scroll', onActivity);
      window.removeEventListener('wheel', onActivity);
      window.removeEventListener('touchmove', onActivity);
      window.removeEventListener('keydown', onKey);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (loco && typeof loco.off === 'function') {
        try {
          loco.off('scroll', onActivity);
        } catch (err) {
          // ignore
        }
      }
    };
  }, []);

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
