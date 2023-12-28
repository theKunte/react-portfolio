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
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', ' ', ':']}
            idx={15}
          />
        </h1>
        <p>
          Hello! My name is Jenny, and I am a software engineer with a passion
          for solving complex problems and building elegant solutions. I have
          worked on a variety of projects that have given me a deep
          understanding of software development principles and best practices. I
          earned my degree in Application Development from North Seattle
          College, where I honed my skills in programming, software design, and
          database management. Since then, I have worked with a variety of
          programming languages, including Python, Java, and JavaScript, as well
          as various frameworks and tools such as React, and Node.js.
        </p>
        <p>
          My expierence are both frontend and backend development. I am
          well-versed in agile methodologies, and I am comfortable working in
          teams or independently. I am constantly learning and staying up to
          date with the latest technologies, trends, and best practices in
          software engineering. My focus is on building scalable and reliable
          software systems that meet the needs of businesses and users alike.
        </p>
        <p align="LEFT">
          If I need to define myself in one sentence that would be world
          traveler, passionate baker, adventure hiker, photography enthusiast!
        </p>
        <p>
          I wan't to make a difference in peoples lives and work hard to find
          solutions that have a meaningful impact on our lifes. Thank you for
          taking the time to learn more about me. I am always open to new
          opportunities and collaborations, so feel free to contact me if you
          would like to chat about software engineering or any other
          tech-related topics!.
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
