import Styled from 'styled-components';

export const StyledButton = Styled.button`
  background-color: red;
  color: yellow;
`;

export const StyledDiv = Styled.div`
  background-color: blue;

  p {
    color: ${(props) => props.color};
  }

  &:hover {
    background-color: green;
  }
`;
