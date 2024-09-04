import React, { useState} from 'react';
import styled from 'styled-components';
import DataVerseImage from '../Images/dataverse.png';
import HelmetImage from '../Images/helmet.jpg';

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  background: #122240;
  min-height: 100vh;
  color: white;
`;

const ProjectCard = styled.div`
  background-color: #1c2d50;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  margin: 20px;
  box-shadow: 0px 0px 15px 3px rgba(0, 191, 255, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
   max-height: ${(props) => (props.expanded ? 'none' : '450px')};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 25px 5px rgba(0, 191, 255, 0.5);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 15px;
  text-align: center;
  position: relative;
   max-height: ${(props) => (props.expanded ? 'none' : '150px')};  /* Control content height */
  overflow: hidden;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const ReadMoreButton = styled.button`
  background-color: #00bfff;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: ${(props) => (props.show ? 'block' : 'none')};
  
  &:hover {
    background-color: #0099cc;
  }
`;


const Projects = () => {
  const [expanded, setExpanded] = useState({
    dataVerse: false,
    helmet: false,
  });

  const toggleExpand = (project) => {
    setExpanded((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <ProjectsContainer>
      <ProjectCard expanded={expanded.dataVerse}>
        <ProjectImage src={DataVerseImage} alt="DataVerse Project" />
        <ProjectContent expanded={expanded.dataVerse}>
          <ProjectTitle>DataVerse-L2 Project (Group) - 2023/2024</ProjectTitle>
          <p>Natural Language based Data visualization tool</p>
          <p>Contribution:</p>
          <ul>
            <li>Data Visualization Module: Designed and developed visually compelling and interactive components.</li>
            <li>Charts Page & Components: Created dynamic charts and tables for real-time data representation.</li>
            <li>Customization & Persistence: Implemented features for editing, saving, and viewing visualizations.</li>
            <li>Data Validation: Ensured accuracy and reliability of displayed information.</li>
          </ul>
          <p>Technologies: React.js, SQLite, Python, Django Rest Framework, Chart.js</p>
          <br/><br/>
          <ReadMoreButton
            show={true}  /* Always show for testing, update condition later */
            onClick={() => toggleExpand('dataVerse')}
          >
            {expanded.dataVerse ? 'Show Less' : 'Read More'}
          </ReadMoreButton>
        </ProjectContent>
      </ProjectCard>
      
      <ProjectCard expanded={expanded.helmet}>
        <ProjectImage src={HelmetImage} alt="Helmet Project" />
        <ProjectContent expanded={expanded.helmet}>
          <ProjectTitle>Minor Safety Helmet-L1 Project (Group) - 2022/2023</ProjectTitle>
          <p>Device to detect and save miners from harmful gases and high temperatures.</p>
          <p>Contribution: CO sensor and Temperature sensor.</p>
          <p>Technologies: Arduino, C, Atmel Studio, KiCad</p>
          <br/><br/>
          <ReadMoreButton
            show={true}  /* Always show for testing, update condition later */
            onClick={() => toggleExpand('helmet')}
          >
            {expanded.helmet ? 'Show Less' : 'Read More'}
          </ReadMoreButton>
        </ProjectContent>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;

