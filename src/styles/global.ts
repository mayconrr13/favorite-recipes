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
    border-radius: 1rem;

    overflow-y: auto;
    overflow-x: hidden;
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

    padding: 1.5rem;
  }
`;
