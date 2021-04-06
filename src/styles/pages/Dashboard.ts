import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  max-width: 1170px;
  min-width: 327px;
  width: 100%;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  > h1 {
    font-size: 1.25rem;
    font-weight: 400;

    padding-left: 1rem;
    margin-bottom: 1.5rem;

    position: relative;

    strong {
      color: var(--yellow-500);
    }

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

  > h2 {
    width: 100%;
    font-size: 1.25rem;

    margin-left: 0;
    margin-bottom: 2rem;
  }

  > button {
    margin-bottom: 1.5rem;
  }
`;

export const FavoriteContainer = styled.div`
  min-width: 327px;
  width: 100%;

  margin-bottom: 2rem;

  > div {
    min-width: 330px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    overflow-x: auto;

    padding: 0.5rem 0;
    padding-left: 0.2rem;
    padding-right: 0.2rem;

    > a {
      margin-right: 1.5rem;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
  }

  @media (min-width: 720px) {
    max-width: calc(2 * 327px + 2rem);

    > div {
      padding-left: 0.2rem;
      padding-right: 0.2rem;
    }
  }

  @media (min-width: 1020px) {
    max-width: calc(3 * 327px + 3rem);

    > div {
      padding-left: 0.2rem;
      padding-right: 0.2rem;
    }
  }

`;

export const RecipesContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div + div {
    margin-top: 1.5rem;
  }

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    > div + div {
      margin-top: 0;
    }
  }

  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    > div + div {
      margin-top: 0;
    }
  }
`;
