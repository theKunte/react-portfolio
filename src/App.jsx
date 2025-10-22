import './App.scss';
import Home from './features/Home';
import Contact from './features/Contact';
import Portfolio from './features/Portfolio';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useRef, useEffect } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Skills from './features/Skills';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    let scroll;
    import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08,
      });
      // expose instance for helpers that need to programmatically scroll
      try {
        scrollRef.current.__locoInstance = scroll;
        // also expose as a global shorthand for some integrations
        window.locomotiveInstance = scroll;
      } catch (err) {
        // ignore if read-only
      }
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="scroll-main-layout" id="main-scroll" data-scroll-container ref={scrollRef}>
        <section id="home" data-scroll-section>
          <Home />
        </section>
        <section id="skills" data-scroll-section>
          <Skills />
        </section>

        <section id="portfolio" data-scroll-section>
          <Portfolio />
        </section>
        <section id="contact" data-scroll-section>
          <Contact />
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
