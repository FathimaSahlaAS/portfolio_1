import React from 'react';
import styled from 'styled-components';
import profilePic from '../Images/profilepic.png';

const AboutContainer = styled.div`
  padding: 100px 50px;
  background: #122240;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  height: 100vh; /* Full viewport height */
`;

const AboutContentWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px; /* Set a max width for the content */
  width: 100%; /* Make sure the content spans the full width available */
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  margin-right: 50px;
  width: 300px;
  height: 300px;
  border: 8px solid white;
  box-shadow: 0px 0px 30px 10px rgba(255, 255, 255, 0.3);
`;

const AboutContent = styled.div`
  max-width: 600px;
  text-align: left;
`;

const Heading = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  color: #00bfff; /* Cyan color for "Me" */
`;


const About = () => (
  <AboutContainer>
    <AboutContentWrapper>
    <ProfileImage src={profilePic} alt="Profile" />
     <AboutContent>
     <Heading>About <span style={{ color: '#00bfff' }}>Me</span></Heading>
    <p>
      I am an enthusiastic and fast-learning individual with a strong interest in the IT field, aspiring to become a Software Engineer.
       I am eager to gain hands-on experience in a professional environment where I can learn from experienced professionals and contribute my passion for technology. 
       I am driven by the challenge of solving complex problems and am excited to bring my creativity and technical curiosity to a dynamic team, helping to create innovative solutions.
    </p>
     </AboutContent> 
    </AboutContentWrapper> 
  </AboutContainer>
);

export default About;
