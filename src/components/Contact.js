import React, { useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


const ContactContainer = styled.div`
  padding: 50px;
  background: #122240;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
`;

const ContactDetails = styled.div`
  flex: 1;
  margin-right: 20px;

  h2 {
    color: white;
  }

  p {
    margin: 10px 0;
    line-height: 1.6;
  }

  a {
    color: #4db5ff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;

  input, textarea {
    background: #f0f0f0;
    border: none;
    margin: 10px 0;
    padding: 15px;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 15px;
    border: none;
    background: #00c6ff;
    color: #ffffff;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #007acc;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;

  a {
    color: #ffffff;
    font-size: 1.5rem;
    margin-right: 15px;
    transition: color 0.3s;
  }

  a:hover {
    color: #00c6ff;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ContactContainer>
      <ContactDetails>
        <h2>Contact Me</h2>
        <p>Let's work together. Reach out to me via email or through social media:</p>
        <p>Email: <a href="mailto:asfathimasahla@gmail.com">asfathimasahla@gmail.com</a></p>
        <p>Phone: <a href="tel:+94(77)2710168">+94 (77) 2710168</a></p>
        <SocialIcons>
          <a href="https://www.facebook.com/profile.php?id=100084060130852&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/sahlafathima18?s=09" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com/in/fathima-sahla" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </SocialIcons>
      </ContactDetails>
      <Form action="https://formspree.io/f/manwkqae" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter Your Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </Form>
    </ContactContainer>
  );
};

/*const Contact = () => (
  <ContactContainer>
    <ContactDetails>
      <h2>Contact Me</h2>
      <p>Let's work together. Reach out to me via email or through social media:</p>
      <p>Email: <a href="mailto:asfathimasahla@gmail.com">asfathimasahla@gmail.com</a></p>
      <p>Phone: <a href="tel:+94(77)2710168">+94 (77) 2710168</a></p>
      <SocialIcons>
        <a href="https://linkedin.com/in/fathima-sahla" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100084060130852&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://x.com/sahlafathima18?s=09" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </SocialIcons>
    </ContactDetails>
    <Form>
      <input type="text" placeholder="Enter Your Name" />
      <input type="email" placeholder="Enter Your Email" />
      <input type="text" placeholder="Enter Your Subject" />
      <textarea placeholder="Enter Your Message"></textarea>
      <button type="submit">Submit</button>
    </Form>
  </ContactContainer>
);*/

export default Contact;
