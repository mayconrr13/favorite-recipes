import styled from 'styled-components';

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
  }

  span {
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.5rem;
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
