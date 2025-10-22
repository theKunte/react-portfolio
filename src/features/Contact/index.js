import './index.scss';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info-panel">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-subtitle">
            Let’s connect! Fill out the form and I’ll get back to you soon.
          </div>
          <form ref={form} className="contact-form" aria-label="Contact form">
            <label htmlFor="name" className="visually-hidden">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              autoComplete="name"
            />
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
            />
            <label htmlFor="message" className="visually-hidden">
              Message
            </label>
            <textarea id="message" name="message" placeholder="Message" required rows={5} />
            <div className="button-row">
              <button type="submit" className="flat-button primary">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="contact-map-panel">
          <div className="map-wrap">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.523040672693!2d-122.3351676843696!3d47.60801397918537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906abedb6e7b0b%3A0x7e3b0e3b0e3b0e3b!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1620240000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
