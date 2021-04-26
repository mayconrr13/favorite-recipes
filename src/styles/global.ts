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

    @media (max-width: 350px) {
      font-size: 87.5%;
    }
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

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    margin: 15rem 0;

    width: 100%;
    max-width: 575px;
    min-width: 327px;
    max-height: 100%;

    background-color: #fff;
    border: none;

    overflow-y: auto;
    overflow-x: hidden;
    z-index: 9999;
  }

  .delete-modal-content {
      max-width: 450px;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #121212ee;
    overflow: hidden;
    padding: 1rem;
    z-index: 9998;
  }
`;
