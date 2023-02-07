import './index.scss';
import React from "react";
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import portfolioData from '../../../data/portfolio.json';

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
    
        return () => clearTimeout(timer)
      }, []) ;
    

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container"> {
                
                portfolio.map((port, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            <img 
                                src={port.cover}
                                className='portfolio-image'
                                alt='portfolio'/>
                                <div className="content">
                                    {/* TODO: Title in portfolio is not displaying fix it :) */}
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn"
                                    onClick={() => window.open(port.url)}>View</button>
                                </div>
                         </div>       
                        )
                    })
                }
            </div>
        );
    }

    return (
        <div className='container portfolio-page'>
            <h1 className='page-title'>
            <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P','o','r','t','f','o','l','i','o',':']}
                    idx={15}/>
            </h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
    )
}

export default Portfolio;