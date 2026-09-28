import './index.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-cta">
        <h2 className="skills-title">CONTACT</h2>
        <p className="contact-eyebrow">get in touch</p>
        <h2 className="contact-heading">Let's Talk</h2>
        <p className="contact-body">
          I'm open to software engineering roles in Seattle or remote. If you have a role or project
          in mind, or just want to connect, reach out on LinkedIn.
        </p>

        <div className="contact-actions">
          <a
            className="contact-email-btn"
            href="https://www.linkedin.com/in/jenny-kunte-seattle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
          <a
            className="contact-email-btn contact-email-btn--secondary"
            href="https://github.com/theKunte"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>

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
