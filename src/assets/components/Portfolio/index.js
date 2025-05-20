import './index.scss'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../../../firebase'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="portfolio-grid">
        {portfolio.map((port, idx) => (
          <div className="portfolio-card" key={idx}>
            <div className="portfolio-image-wrapper">
              <img
                src={port.image}
                className="portfolio-image"
                alt={port.name || 'portfolio'}
              />
            </div>
            <div className="portfolio-content">
              <h2 className="portfolio-title">{port.name}</h2>
              <p className="portfolio-description">{port.description}</p>
              {port.info && <p className="portfolio-info">{port.info}</p>}
              <a
                className="portfolio-btn"
                href={port.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={'Portfolio:'.split('')}
          idx={19}
        />
      </h1>
      <p className="portfolio-intro">
        Here are some of my recent projects. Click on any to learn more or view the live site/code.
      </p>
      {renderPortfolio(portfolio)}
    </div>
  )
}

export default Portfolio
