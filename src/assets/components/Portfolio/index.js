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
            {/* TODO: fix renderPortfolio. Currently not displaying the image */}
            {/* <div>{renderPortfolio(portfolioData)}</div> */}
        </div>
    )
}

export default Portfolio;