import styled, { keyframes } from 'styled-components';

const title = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const description = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100vw;
  height: 100vh;

  padding: 1rem;

  background-image: linear-gradient(
      180deg,
      rgba(18, 18, 18, 0.5) 0%,
      rgba(18, 18, 18, 0.5) 100%
    ),
    url('/home-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > strong {
    font-size: 1.75rem;
    color: #ffffff;

    margin-top: 20vh;
    margin-bottom: 1.25rem;
    opacity: 1;

    animation: ${title} 0.5s ease-in;
  }

  > span {
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.5rem;

    animation: ${description} 1.2s ease-in 1;
  }

  button {
    margin-top: auto;
    height: 3rem;
    width: 100%;
    max-width: 400px;

    border: none;
    background: #ffffff;

    display: flex;

    position: relative;

    div {
      position: absolute;

      width: 3rem;
      height: 100%;
      background-color: var(--primary);

      transition: width 0.3s ease-in;

      display: flex;
      align-items: center;

      padding-left: 0.625rem;

      img {
        width: 1.75rem;
        height: auto;

        margin-right: 0;
      }
    }

    span {
      margin-left: 3rem;
      width: 100%;
      height: 100%;
      z-index: 5;

      color: var(--text);

      transition: color 0.5s ease-in;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      div {
        width: 100%;
      }

      span {
        color: #ffffff;
      }
    }
  }
`;
