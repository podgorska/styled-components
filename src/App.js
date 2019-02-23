import React, { Component } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import {ButtonStyled, theme1, theme2} from './theme/globalStyle';
import Button from './components/Button';
import ThemeSelect from './components/Themeselect';

const AppWrapper = styled.div`
  text-align: center;
  height: 100vh;
  padding: 1rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.primary};
  min-width: 600px;
`;

const ButtonsWrapper = styled.div`
  text-align: center;
  height: 10vh;
  padding: 1rem;
  background-color: ${props => props.theme.menu};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;

const AppTitle = styled.h1`
  font-weight: 900;
`;

const AppIntro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`;

export const BigButt = styled(ButtonStyled)`
  height: 3rem;
  font-size: 2rem;
  width: 40vw;
  border-radius: 30px;
`;

const Underline = styled.span`
  border-bottom: 4px solid ${props => props.theme.secondary};
`;

class App extends Component {
    state = {
        theme: theme1,
    };

    handleThemeChange = e => {
        let theme = e.target.value;
        theme === 'theme1' ? (theme = theme1) : (theme = theme2);
        this.setState(() => ({ theme }))
    };

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
              <AppWrapper>
                <AppLogo src={logo} alt="logo" />
                <AppTitle>This is a simple app that uses:</AppTitle>
                <AppIntro>
                  <Underline>
                      <code>create-react-app</code>
                  </Underline>
                </AppIntro>
                <AppIntro>
                  <Underline>
                      <code>styled-components</code>
                  </Underline>
                </AppIntro>
                <ThemeSelect onChange={this.handleThemeChange} />
                <ButtonsWrapper>
                  <Button text={'Normal button'}/>
                  <Button primary text={'Primary Button'}/>
                  <Button component={BigButt} text={'Big Button'}/>
                </ButtonsWrapper>
              </AppWrapper>
            </ThemeProvider>
        )
    }
}

export default App;