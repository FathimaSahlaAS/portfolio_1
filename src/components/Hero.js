import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../Images/profilepic.png';

// Keyframe for typewriter effect
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from { border-right-color: rgba(255, 255, 255, 0.75); }
  to { border-right-color: transparent; }
`;

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #122240;
  color: white;
  padding: 0 10%;
`;

const TextContainer = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  margin: 10px 0;
  overflow: hidden;
  border-right: 2px solid rgba(255, 255, 255, 0.75); /* Cursor effect */
  white-space: nowrap;
  animation: ${typing} 4s steps(40, end), ${blink} 0.75s step-end infinite;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
  line-height: 1.5;
  max-width: 80%;
`;

const ContactLinks = styled.div`
  margin-top: 20px;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-size: 2rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #61dafb;
    }
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  max-width: 300px;
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 8px solid white;
  box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.3); /* Glowing effect */`;
  ;

const Hero = () => (
  <HeroContainer>
    <TextContainer>
    <Title>Hello, It's Me</Title>
    <Title>Fathima Sahla</Title>
    <Subtitle>Bsc Hons Information Technology</Subtitle>
    <Description>
        I'm an IT undergraduate at the University of Moratuwa with a passion for software development,
        web design, and technology innovation.
      </Description>
    <ContactLinks>
      <a href="mailto:asfathimasahla@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://linkedin.com/in/fathima-sahla" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/FathimaSahlaAS" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </ContactLinks>
    </TextContainer>
    <ProfileImageContainer>
    <ProfileImage src={profilePic} alt="Profile" /> 
    </ProfileImageContainer>   
  </HeroContainer>
);

export default Hero;













