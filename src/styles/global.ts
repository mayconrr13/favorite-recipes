import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

        ::-webkit-scrollbar {
            height: 8px;
            width: 8px;
        }
  
        ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: var(--yellow-500);  
        }

        ::-webkit-scrollbar-track {
            background: #dddddd; 
            -webkit-border-radius: 10px;
          border-radius: 10px;
        }
  }

  :root {
      --yellow-500: #FFAD05;

      --gray-800: #484634;

      --black: #000000;
  }

  @media (max-width: 1080px) {
      html {
          font-size: 93.75%;
      }
  }

  @media (max-width: 720px) {
      html {
          font-size: 87.5%;
      }
  }

  body {
      color: var(--gray-800);
      overflow-x: hidden;
  }

  body, input, textarea, select, button {
      font: 400 1rem Poppins, sans-serif;
  }

  button {
      cursor: pointer;
  }

  a {
      color: inherit;
      text-decoration: none;
  }
`;
