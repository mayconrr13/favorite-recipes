import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 750px;

  margin: 0 auto;
  padding: 0 1.5rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    > div {
      >button {
        &:first-child {
          margin-right: 1rem;
        }
      }
    }
  }

  nav + div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    h1 {
      font-size: 1.5rem;

      position: relative;
      padding-left: 1rem;


      &::before {
        content: '';
        width: 8px;
        height: 100%;
        background: var(--yellow-500);
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    button {
      border: none;
      background-color: transparent;

      img {
        width: 24px;
        height: auto;
      }
    }
  }

  > p {
    font-size: 1.25rem;
    
    margin-bottom: 1.5rem;
  }

  @media (min-width: 750px) {
    max-width: 900px;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-bottom: 2rem;

  > div {
    width: 100%;
    max-width: 750px;
    position: relative;

    // 16:9 aspect ratio 
    &::after {
      display: block;
      content: '';
      padding-bottom: 56.25%;
    }

    img {
      background: #121212;

      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      border-radius: 0.5rem;

      object-fit: cover;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;

    width: 327px;

    button {
      flex: 1; 
      /* background: #121212; */

      display: flex;
      flex-direction: column;
      align-items: center;

      border: none;
      border-radius: 0.5rem;

      & + button {
        margin-left: 1rem;
      }

      img {
        width: 100%;
        height: 100%;

        max-height: 64px;
        /* max-width: 96px; */

        object-fit: cover;

        border: none;
        border-radius: 0.5rem;
      }
    }
  }

  @media (min-width: 410px) {
    > div {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 0.5rem;

  background: var(--yellow-500);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  > svg {
    width: 24px;
    height: auto;
    color: #ffffff;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const SimpleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 720px) {
    display: none;
  }
`;

export const ActionButtonContainer = styled.div`
  display: none;

  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      min-width: 150px;
      /* max-width: 150px; */
    }
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 327px;
  width: 100%;

  margin: 0 auto 1.5rem auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    svg {
      width: 1.5rem;
      height: auto;
      color: var(--yellow-500);
    }

    p {
      font-size: 16px;
      padding-top: 0.5rem;
    }
  }
`;

export const RecipeDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  section {
    h2 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;

      & + div {
        flex: 1;
        font-size: 1.25rem;
      }
    }

    ul {
      margin-bottom: 2rem;
      width: calc(100vw - 3rem);
      max-width: 350px;

      li {
        list-style: none;
        font-size: 1.25rem;

        position: relative;
        padding-left: 1.25rem;
        word-wrap: break-word;

        &::before {
          content: '';
          width: 8px;
          height: 5px;
          background: var(--yellow-500);
          position: absolute;
          top: calc(0.5 * 1.25rem); // tamanho da fonte / 2
          left: 0;
        }

        & + li {
          margin-top: 0.5rem;
        }
      }
    }
  }

  @media (min-width: 720px) {
    flex-direction: row;
    align-items: flex-start;

    ul {
      margin: 0 1.5rem 0 0;  
    }
  }
`;