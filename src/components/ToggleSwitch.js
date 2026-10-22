import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

// Styled Component for the Toggle
const ToggleContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: ${({ theme }) => theme.color}; 
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const ToggleSwitch = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </ToggleContainer>
  );
};

export default ToggleSwitch;
