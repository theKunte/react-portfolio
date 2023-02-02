import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
  //  TODO: email submission issnt working at the moment
    emailjs
    .sendForm('default_service', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')      
    .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      ) 
      .catch((error) => {
        console.log(error)
      })
  }

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
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Jenny Kunte, 
          <br/>
          United States
          <br/>
          Pike Place Market 7211, 98104 <br/>
          Seattle, WA <br/>
          <span>JennyKunte90@gmail.com</span>
        </div>
        <div className='map-wrap'>
        <MapContainer center={[47.609657,-122.342148]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.8468, 6.6012]}>
            <Popup>Jenny lives here, come over for a cup of coffee!</Popup>
          </Marker>
          </MapContainer>

        </div>
      </div>
      </>
    )
}

export default Contact