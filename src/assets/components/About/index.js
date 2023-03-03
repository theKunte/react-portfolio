import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3, faGitAlt, faHtml5, faJsSquare, faPython  } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer)
      }, []) 

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e',' ',':']}
                    idx={15}/>
                </h1>
                <p>
                    Hi there! I am Jenny and I am original from Germany! Besides my passion for cooking food I love to code! 
                    I graduated at NSC in Application Development and now I am looking for new opportunities in Industry.
                    
                </p>
                <p  align="LEFT">
                    If I need to define myself in one sentence that would be world traveler, passionate baker, adventure hiker, photography enthusiast!
                </p>
                <p>
                    I wan't to make a difference in peoples lives and work hard to find solutions that have a meaningful impact on our lifes. 
                    
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color='#28A4D9'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About ;
