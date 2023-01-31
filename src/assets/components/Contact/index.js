import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const Contact = () => {

    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer)
      }, [])

    return (
        <>
        <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p>
            I am interested in entry level positions or any freelance opportunities to grow and learn. Feel free to reach out to me if you have questions or are interested in 
            working with me fill out the contact form below
          </p>
          <div className="contact-form">
            <ul>
                <li className="half">
                    <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                    <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                    <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                    <textarea placeholder="Message" name="message" required/>      
                </li>
                <li>
                    <input type="submit" className='flat-button' value="SEND" />
                </li>
            </ul>
          </div>
        </div>
        </div>
        
        </>
    )
}

export default Contact