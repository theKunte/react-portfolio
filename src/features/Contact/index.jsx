import './index.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-cta">
        <h2 className="contact-title">CONTACT</h2>
        <p className="contact-eyebrow">get in touch</p>
        <h2 className="contact-heading">Let's Talk</h2>
        <p className="contact-body">
          I'm open to frontend and full-stack roles. If you have a project in mind or just want to
          connect, my inbox is always open.
        </p>

        <a
          className="contact-email-btn"
          href="https://www.linkedin.com/in/jenny-kunte-seattle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>

        <div className="contact-links">
          {/* <a
            className="contact-link contact-link--resume"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a> */}
        </div>
      </div>

      {/* Scroll indicator hidden on last section before footer */}
      {/* <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-dot" />
        <span className="scroll-line" />
      </div> */}
    </section>
  );
};

export default Contact;
