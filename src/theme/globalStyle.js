import styled, {createGlobalStyle, css} from 'styled-components';

createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
 
  body {
    padding: 0;
    margin: 0 !important;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1 {
    font-family: Montserrat;
  }
`;

export const theme1 = {
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#eb238e',
    light: '#f4f4f4',
    dark: '#222',
    menu: '#ffb2df',
    text: '#000'
};

export const theme2 = {
    primary: '#6e27c5',
    secondary: '#ffb617',
    danger: '#f16623',
    light: '#f4f4f4',
    dark: '#222',
    menu: '#9f83c1',
    text: '#fff'
};

export const ButtonStyled = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary};
      color: white;
    `};
`;