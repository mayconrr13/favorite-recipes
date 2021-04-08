import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;

    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;

    background: var(--yellow-500);

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      color: #ffffff;
      width: 24px;
      height: auto;
    }
  }
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
`;

export const SearchInput = styled.div`
  width: 100%;
  max-width: 475px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  input {
    border: none;
    background: transparent;
    margin-left: 1rem;
    flex: 1;
  }
  
  button {
    width: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 0 0 auto;
    padding: 1rem;

    background: var(--yellow-500);
    border: none;
    border-radius: 0.5rem; 

    svg {
      color: #ffffff;
      width: 28px;
      height: auto;
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

  > a + a {
    margin-top: 1.5rem;
  }

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    > a + a {
      margin-top: 0;
    }
  }

  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    > a + a {
      margin-top: 0;
    }
  }
`;
