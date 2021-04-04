import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-width: 375px;
  max-width: 1170px;

  padding: 1.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    margin-bottom: 3rem;
    margin-right: auto;
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

      max-width: 510px;
      margin: 0 auto;
    }

    > img {
      width: 100%;
      max-width: 450px;

      margin: auto;
    }
  }

  @media (min-width: 1020px) {
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
        margin: 0;
        max-width: 500px;
      }
    }
  }

  @media (min-width: 1120px) {
    main {
      > img {
        max-width: 700px;
      }
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding-left: 1.5rem;
  margin-bottom: 2rem;

  &::before {
    content: '';
      width: 8px;
      height: 100%;
      background: var(--yellow-500);
      position: absolute;
      top: 0;
      left: 0;
  }

  p {
    margin-right: auto;

    &:first-child {
      font-size: 1.5rem;
      font-weight: 700;

      margin-bottom: 1.75rem;
    }

    &:last-child {
      font-size: 1.25rem;
      line-height: 30px;
      letter-spacing: 1px;
    }
  }

  @media (min-width: 600px) {
    p {
      &:first-child {
        font-size: 2rem;
      }

      &:last-child {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1020px) {
    width: 500px;
    margin-bottom: 3rem;

    p {
      &:first-child {
        font-size: 2.25rem;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;

  min-width: 327px;
  max-width: 510px;

  a {
    width: 100%;
    padding: 1rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;

    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;

    transition: filter 0.2s;
    
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

    &:hover {
      filter: brightness(0.90);
    }
  }
`;