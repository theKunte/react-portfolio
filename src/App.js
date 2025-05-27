import './App.scss'
import Home from './assets/components/Home'
import Contact from './assets/components/Contact'
import Portfolio from './assets/components/Portfolio'
import NavBar from './assets/components/NavBar'
import Footer from './assets/components/Footer'
import { useRef, useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function App() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    })
    return () => scroll.destroy()
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
        <section id="portfolio" data-scroll-section>
          <Portfolio />
        </section>
        <section id="contact" data-scroll-section>
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App
