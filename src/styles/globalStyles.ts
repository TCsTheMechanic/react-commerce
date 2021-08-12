import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  #root {
    display: flex;
    justify-content: center;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font: 400 1rem sans-serif;
  }

  body {
    background: ${ props => props.theme.colors.background };
    color: ${ props => props.theme.colors.text }
  }

  ul, li {
    list-style: none;
  }

  #link {
    text-decoration: none;
  }
`;
