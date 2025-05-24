import './index.scss'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef()

  return (
    <div className="contact-main-layout">
      <div className="contact-left">
        <div className="map-wrap">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.523040672693!2d-122.3351676843696!3d47.60801397918537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906abedb6e7b0b%3A0x7e3b0e3b0e3b0e3b!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1620240000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '420px', borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-text-zone">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-subtitle">
            Let's connect! Fill out the form and I'll get back to you soon.
          </div>
          <form ref={form} className="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required />
            <div className="button-row">
              <button type="submit" className="flat-button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
