import React from 'react';
import { StyledLink, StyledNavBar } from './Header.style.js';

export default function Header() {
  return (
    <StyledNavBar>
      <StyledLink to="">Home</StyledLink>
      <StyledLink to="health">Health</StyledLink>
      <StyledLink to="science">Science</StyledLink>
      <StyledLink to="sports">Sports</StyledLink>
    </StyledNavBar>
  );
}
