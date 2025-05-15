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
            strArray={['About Me']}
            idx={15}
          />
        </h1>
        <p>
          <strong>Hi! I'm Jenny</strong> — a former project auditor turned
          software engineer with a deep love for crafting solutions that matter.
          My path into tech wasn’t linear, and that’s what makes it powerful.
        </p>

        <p>
          I began in corporate project auditing, where precision, communication,
          and structure were everything. At the same time, I started my journey
          of becoming a software engineer for something more creative and
          impactful. I started learning application development at NSC.
        </p>

        <p>
          Fast forward to today — I hold a BA in Application Development and
          spend my days turning ideas into functional, elegant software. I
          specialize in writing clean code, building intuitive UIs, and
          collaborating with teams to bring digital products to life.
        </p>

        <p>
          Whether I’m contributing to a frontend feature, optimizing backend
          logic, or tinkering with animations (like this cup of coffee 🍵), I
          bring passion, persistence, and a detail-oriented mindset to
          everything I do.
        </p>

        <p>
          Outside of code, I’m an adventure hiker, avid baker, world traveler,
          and amateur photographer. These experiences help fuel my creativity
          and balance.
        </p>

        <p>
          <strong>
            I’m always excited to meet new collaborators or take on challenges.
          </strong>
          Where technology makes life better. Let’s connect — I’d love to hear
          your story too.
        </p>
        <br></br>
      </div>

      <div className="cup">
        <div className="steam steam-1"></div>
        <div className="steam steam-2"></div>
        <div className="steam steam-3"></div>
        <div className="steam steam-4"></div>
      </div>
    </div>
  )
}

export default About
