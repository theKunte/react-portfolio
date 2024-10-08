import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['Passionate Software Engineer:']}
            idx={15}
          />
        </h1>
        <p>
          <b>Hi there!</b>
          <br />
          <br />
          I'm Jenny, a software engineer with a BA in Application Development,
          combining a diverse journey from being meticulous project auditor to
          crafting the perfect espresso. — my journey has shaped me into an
          unconventional software engineer.
        </p>
        <p>
          From Lattes to Code! My academic background in Application Development
          provides a solid foundation for my passion for problem-solving and
          coding creativity. Check out some of my projects!
        </p>
        <p>
          Why me? I thrive in collaborative environments and bring a wealth of
          experience in delivering high-quality solutions.
        </p>
        <p align="LEFT">
          Beyond coding, I'm a world traveler, passionate baker, adventure
          hiker, and photography enthusiast! If I had to define myself in one
          sentence, that would be it.
        </p>
        <p>
          I'm driven by the desire to make a positive impact on people's lives
          through technology. Eager for new challenges and collaborations, I'm
          open to discussing anything related to software engineering or tech.
          Let's connect and explore exciting possibilities together!
        </p>
      </div>

      <div className="cup"></div>
    </div>
  )
}

export default About
