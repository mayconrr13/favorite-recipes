import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-width: 375px;
  max-width: 1170px;
  height: 100vh;

  padding: 1.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    margin-bottom: 3rem;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    > img {
      width: 100%;
      max-width: 450px;

      margin: 2rem auto 1.5rem auto;
    }
  }

  @media (min-width: 900px) {
    header {
      margin-bottom: 7rem;
    }

    main {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      section {
        margin-right: 2rem;    
      }

      > img {
        max-width: 550px;
        margin: 0;
      }
    }
  }
`;

export const Information = styled.div`
  width: 100%;
  min-width: 327px;
  max-width: 510px;

  display: flex;
  align-items: center;

  margin-bottom: 2rem;

  span {
    height: 100%;
    width: 8px;
    min-width: 8px;

    margin-right: 1rem;

    background-color: var(--yellow-500);
  }

  div {
    p {
      &:first-child {
        font-size: 1.5rem;
        font-weight: 700;

        margin-bottom: 1.75rem;
      }

      &:last-child {
        line-height: 30px;
        letter-spacing: 1.5px;
      }
    }
  }

  @media (min-width: 600px) {
    width: 510px;

    div {
      p {
        &:first-child {
          font-size: 2rem;
        }

        &:last-child {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (min-width: 900px) {
    width: 510px;
    margin-bottom: 3rem;

    span {
      height: 280px;
    }

    div {
      p {
        &:first-child {
          font-size: 2.25rem;
        }
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 327px;
  max-width: 550px;

  button {
    width: 100%;
    padding: 1rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    font-weight: 700;
    
    &:first-child {
      margin-right: 1.5rem;

      color: var(--gray-800);

      background: #FFFFFF;
      border: 1px solid var(--gray-800);
      
    }

    &:last-child {
      color: #fff;

      background: var(--yellow-500);
      border: none
    }
  }

  @media (min-width: 600px) {
    button {
      font-size: 1.25rem;
    }
  }
`;