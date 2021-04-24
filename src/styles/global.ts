import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #F38F26;
    --text: #242424;
    --background: #FFFFFF;
    --red: #DA3E52;
    --gray: #E7E7E7;
    --gray-light: #F7F7F7;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    background-color: var(--background);
    color: var(--text);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
    color: var(--text);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
