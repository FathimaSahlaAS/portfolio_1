import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding:100px 50px;
  background: #122240;
  height: 100vh;
  color: white;
   display: flex;
  justify-content: space-between;
`;

const SkillSet = styled.div`
  flex: 1;
  margin: 0 20px; /* Margin to create some space between the columns */
`;

const Skill = styled.div`
  margin-bottom: 10px;
`;

const SkillTitle = styled.span`
  font-size: 1.5rem; /* Bigger text for the title before colon */
  font-weight: bold;
`;

const SkillDetail = styled.span`
  font-size: 1rem; /* Smaller text for the detail after colon */
`;

const Skills = () => (
  <SkillsContainer>
    <SkillSet>
      <h1>Technical Skills</h1>
      <Skill>
        <SkillTitle>Programming Languages:</SkillTitle><br></br>
        <SkillDetail> Java, C, Python</SkillDetail>
      </Skill>
      <Skill>
        <SkillTitle>Web Development:</SkillTitle><br></br>
        <SkillDetail> React, HTML, CSS, Django, JavaScript, Node.js</SkillDetail>
      </Skill>
      <Skill>
        <SkillTitle>Database:</SkillTitle><br></br>
        <SkillDetail> MySQL, SQLite, MsSQL</SkillDetail>
      </Skill>
      <Skill>
        <SkillTitle>IDE:</SkillTitle><br></br>
        <SkillDetail> VS Code, Intellij Idea</SkillDetail>
      </Skill>
      <Skill>
        <SkillTitle>Version Control:</SkillTitle><br></br>
        <SkillDetail> Git, GitHub</SkillDetail>
      </Skill>
      <Skill>
        <SkillTitle>Other:</SkillTitle><br></br>
        <SkillDetail> Gimp, Blender, Sketchup, Canva</SkillDetail>
      </Skill>
    </SkillSet>

    <SkillSet>
      <h1>Soft Skills</h1>
      <Skill>Time Management</Skill>
      <Skill>Team Collaboration</Skill>
      <Skill>Critical Thinking</Skill>
      <Skill>Problem Solving</Skill>
      <Skill>Communication</Skill>
      <Skill>Adaptability</Skill>
    </SkillSet>
  </SkillsContainer>
);

export default Skills;
