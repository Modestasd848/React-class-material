import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
