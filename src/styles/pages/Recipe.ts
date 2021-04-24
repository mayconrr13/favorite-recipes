import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid var(--gray);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    width: 100%;
    max-width: 1120px;

    padding: 1rem;
    margin: 0 auto;

    nav {
      display: none;
    }

    > button {
      border: none;
      background-color: transparent;

      span {
        display: block;
        width: 1.5rem;
        height: 0.125rem;
        background-color: var(--text);

        & + span {
          margin-top: 0.25rem;
        }
      }
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  padding: 1rem 0;

  > div {
    /* hero image */
    &:nth-child(2) {
      width: 100%;
      height: 400px;

      background-image: url('/home-background.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    /* title section */
    &:nth-child(4) {
      margin: 2rem auto;
      padding: 0 1rem;

      display: flex;
      align-items: center;

      h2 {
        font-size: 1.75rem;
        flex: 1;
      }

      svg {
        width: 1.5rem;
        height: auto;

        margin-left: 1rem;
      }
    }
  }
`;

export const Controls = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  display: flex;
  align-items: center;

  button {
    border: none;
    background-color: transparent;

    &:nth-child(1) {
      margin-right: auto;
    }

    &:nth-child(2) {
      margin-right: 1.5rem;
    }

    svg {
      width: 1.5rem;
      height: auto;
    }

    span {
      display: none;
    }
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 0.75rem;
  margin: -2rem auto 0 auto;

  background-color: var(--background);
  border: 1px solid var(--gray);
  width: calc(100% - 2rem);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    & + div {
      margin-left: 0.75rem;
    }

    svg {
      width: 1rem;
      height: auto;
      color: var(--primary);

      margin-bottom: 0.5rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;

export const RecipeDetails = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;

  > div {
    & + div {
      margin-top: 2rem;
    }

    h3 {
      margin-bottom: 1rem;
      font-size: 1.25rem;
      color: var(--primary);
    }
  }
`;

export const Ingredients = styled.div`
  width: 100%;

  ul {
    li {
      list-style-type: none;
      position: relative;
      padding-left: 1rem;

      & + li {
        margin-top: 0.5rem;
      }

      &::before {
        position: absolute;
        content: '';
        top: 0.625rem;
        left: 0;
        width: 0.5rem;
        height: 0.25rem;
        background-color: var(--primary);
      }
    }
  }
`;

export const Directions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    line-height: 2rem;
  }

  strong {
    font-size: 1rem;
  }

  p + strong {
    margin-top: 1rem;
  }
`;
