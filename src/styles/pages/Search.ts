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

export const Header = styled.header`
  width: 100%;
  background: #ffffff;

  border-bottom: 0.5px solid #cccccc;

  margin-bottom: 2rem;

  > div {
    max-width: 1170px;
    padding: 1rem;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      margin-left: 0;
      margin-right: auto;
    }
  }
`;

export const BurgerMenu = styled.button`
  border: none;
  background: transparent;
  
  padding: 0.5rem;

  span {
    display: block;

    width: 24px;
    height: 2px;
    background: var(--gray-800);
  }

  span + span {
    margin-top: 0.4rem;
  }

  @media(min-width: 720px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media(min-width: 720px) {
    display: flex;
    align-items: center;

    a {
      svg {
        width: 24px;
        height: auto;
        color: var(--gray-800);
      }

      & + a {
        margin: 0 3rem;
      }
    }

    > div {
      display: flex;
      align-items: center;

      margin-right: 3rem;

      img {
        width: 48px;
        height: auto;

        border-radius: 50%;

        margin-right: 1rem;
      }
      
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        strong {
          font-size: 1rem;
        }

        span {
          font-size: 0.9rem;
          color: #bbbbbb;
        }
      }
    }

    button {
      border: none;
      background: transparent;
      color: var(--gray-800);
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

export const RecipeCard = styled.div`
  width: 327px;
  min-width: 327px;

  position: relative;
  padding: 150px 1rem 1rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.5rem;

  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    object-fit: cover;
    background: #121212;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  section {
    margin: 1rem 0;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
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

    > img {
      width: 24px;
      height: auto;
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    svg {
      width: 1rem;
      height: auto;
      color: var(--yellow-500);
    }

    p {
      font-size: 0.9rem;
      padding-top: 0.5rem;
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
