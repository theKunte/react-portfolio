import './index.scss'
import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../../../firebase'

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="portfolio-main-layout">
        <div className="portfolio-left" style={{ display: 'none' }} />
        <div className="portfolio-right" style={{ width: '100%' }}>
          <div className="portfolio-content-zone">
            <h1 className="main-title">My Recent Work</h1>
            <p className="portfolio-intro">
              Here are a few past projects I've worked on. Want to see more?{' '}
              <a href="TODO: fix Email"> Contact Me</a>.
            </p>
            <div className="portfolio-cards-wrapper">
              {portfolio.map((port, idx) => (
                <div className="portfolio-project-card" key={idx}>
                  <div className="portfolio-image-wrapper small dice-style-image">
                    <img
                      src={port.image}
                      className="portfolio-image"
                      alt={port.name || 'portfolio'}
                    />
                    <div className="portfolio-hover-info">
                      <h2 className="portfolio-title">{port.name}</h2>
                      <p className="portfolio-description">
                        {port.description}
                      </p>
                      {port.info && (
                        <p className="portfolio-info">{port.info}</p>
                      )}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return renderPortfolio(portfolio)
}

export default Portfolio
