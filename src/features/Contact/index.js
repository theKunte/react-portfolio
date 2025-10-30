import './index.scss';
import { useState } from 'react';

// EmailJS env var keys (optional):
// REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', text }

  const validate = () => {
    if (!name.trim()) return 'Please enter your name.';
    if (!email.trim()) return 'Please enter your email.';
    // simple email regex
    // eslint-disable-next-line no-useless-escape
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    if (!re.test(email)) return 'Please enter a valid email address.';
    if (!message.trim() || message.trim().length < 10)
      return 'Please enter a longer message (10+ chars).';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if (err) {
      setStatus({ type: 'error', text: err });
      return;
    }

    setSending(true);

    // Attempt to send via EmailJS if configured
    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: name,
        from_email: email,
        message,
      };

      let sent = false;
      // Prefer the modern @emailjs/browser if available on window
      // (public/index.html includes the CDN script by default)
      // Or use env-configured EmailJS via npm package if present (not imported to avoid bundling issues)
      if (window && window.emailjs && typeof window.emailjs.send === 'function') {
        // use window.emailjs (CDN)
        if (serviceId && templateId && publicKey) {
          await window.emailjs.send(serviceId, templateId, templateParams, publicKey);
          sent = true;
        } else if (serviceId && templateId) {
          // try without key
          await window.emailjs.send(serviceId, templateId, templateParams);
          sent = true;
        }
      }

      // If not sent and npm package is installed, attempt dynamic import (avoids bundling if unused)
      if (!sent) {
        try {
          // dynamic import of @emailjs/browser
          const emailjs = await import(/* webpackChunkName: "emailjs" */ '@emailjs/browser');
          if (publicKey && serviceId && templateId) {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            sent = true;
          } else if (serviceId && templateId) {
            await emailjs.send(serviceId, templateId, templateParams);
            sent = true;
          }
        } catch (importErr) {
          // ignore import errors
        }
      }

      if (sent) {
        setStatus({ type: 'success', text: 'Message sent — thank you!' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // fallback: open mail client
        const mailto = `mailto:${encodeURIComponent('hello@example.com')}?subject=${encodeURIComponent(
          `Contact from ${name}`
        )}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`;
        setStatus({
          type: 'error',
          text: 'Sending is not configured. Opening your mail client as a fallback.',
        });
        window.location.href = mailto;
      }
    } catch (err) {
      setStatus({
        type: 'error',
        text: 'There was an error sending your message. Please try again later.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container contact-container--full">
        <div className="contact-info-panel">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-subtitle">
            Let’s connect! Fill out the form and I’ll get back to you soon.
          </div>

          <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
            <label htmlFor="name" className="contact-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-required="true"
            />

            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
            />

            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="How can I help?"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-required="true"
            />

            <div className="button-row">
              <button
                type="submit"
                className="flat-button primary"
                disabled={sending}
                aria-busy={sending}
              >
                {sending ? 'Sending…' : 'Send'}
              </button>
            </div>

            <div className="contact-status" role="status" aria-live="polite">
              {status && (
                <div className={`contact-message contact-message--${status.type}`}>
                  {status.text}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
