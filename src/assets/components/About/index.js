import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
} from '@fortawesome/free-brands-svg-icons'

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
          Hi there! I'm Jenny, a dedicated software engineer with a knack for
          tackling intricate problems and crafting elegant solutions. Armed with
          a degree in Application Development from North Seattle College, I've
          garnered expertise in programming, software design, and database
          management.
        </p>
        <p>
          My journey has led me to explore various programming languages such as
          Python, Java, and JavaScript, along with frameworks like React and
          Node.js. I've successfully navigated both frontend and backend
          development, demonstrating versatility in my approach.
        </p>
        <p>
          Proficient in agile methodologies, I thrive in collaborative
          environments and bring a wealth of experience in delivering
          high-quality software solutions. Always on the cutting edge, I stay
          abreast of the latest technologies and best practices, ensuring my
          work aligns with industry standards.
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

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faPython} color="#28A4D9" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
