import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-header fade-in">
        <div className="section-tag">Say hello</div>
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="contact-inner fade-in">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Let's work together</h3>

          <a
            className="contact-item"
            href="mailto:asfathimasahla@gmail.com"
          >
            <i className="fas fa-envelope"></i>
            <span>asfathimasahla@gmail.com</span>
          </a>

          <a
            className="contact-item"
            href="tel:+94772710168"
          >
            <i className="fas fa-phone"></i>
            <span>+94 (77) 2710168</span>
          </a>

          <a
            className="contact-item"
            href="https://www.linkedin.com/in/fathima-sahla-159255288/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
            <span>linkedin.com/in/fathima-sahla</span>
          </a>

          <div className="contact-socials">
            <a
              className="social-btn"
              href="https://github.com/FathimaSahlaAS"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              className="social-btn"
              href="https://www.linkedin.com/in/fathima-sahla-159255288/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="social-btn"
              href="https://x.com/sahlafathima18"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-x-twitter"></i>
            </a>

            <a
              className="social-btn"
              href="https://www.facebook.com/profile.php?id=100084060130852"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          className="contact-form"
          action="https://formspree.io/f/manwkqae"
          method="POST"
        >
          <div className="form-row">
            <input
              className="form-field"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              className="form-field"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <input
            className="form-field"
            type="text"
            name="subject"
            placeholder="Subject"
          />

          <textarea
            className="form-field"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button className="submit-btn" type="submit">
            Send Message{" "}
            <i
              className="fas fa-paper-plane"
              style={{ marginLeft: "8px" }}
            ></i>
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;