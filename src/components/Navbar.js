// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: #0a1930;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;

    &:hover {
      color: #61dafb;
    }
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <h1 style={{ color: 'white', fontSize: '3rem' }}>Portfolio</h1>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;
