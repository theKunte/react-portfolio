import LogoTitle from '../../images/logo-j.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react'
import { useEffect } from 'react';
import Logo from './Logo';


const Home =() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e','n','n','y',' ','K','u','n','t','e']
    const jobArray =['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer)
      }, []) 
    

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                    <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer'/>
                 <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                 idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                 idx={22}/>
                </h1>
                <h2>Junior Software Engineer / Project Managment </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home;