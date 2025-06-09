import './App.scss'
import Home from './assets/components/Home'
import Contact from './assets/components/Contact'
import Portfolio from './assets/components/Portfolio'
import NavBar from './assets/components/NavBar'
import Footer from './assets/components/Footer'
import { useRef, useEffect } from 'react'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Skills from './assets/components/Skills'

function App() {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return
    let scroll
    import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08,
      })
    })
    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <>
      <NavBar />
      <div
        className="scroll-main-layout"
        id="main-scroll"
        data-scroll-container
        ref={scrollRef}
      >
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
  )
}

export default App
