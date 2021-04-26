import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;

interface ContentProps {
  isFavorite: boolean;
  image: string;
}

export const Content = styled.main<ContentProps>`
  width: 100%;
  padding: 1rem 0;

  > div {
    /* hero image */
    &:nth-child(2) {
      width: 100%;
      height: 400px;

      background-image: url(${(props) => props.image});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    /* title section */
    &:nth-child(4) {
      margin: 2rem auto;
      padding: 0 1rem;

      max-width: 1120px;

      display: flex;
      align-items: center;

      h2 {
        font-size: 1.75rem;
      }

      button {
        border: none;
        background-color: transparent;
        outline: none;

        margin-left: 1.5rem;

        svg {
          width: 1.5rem;
          height: auto;
          color: ${(props) =>
            props.isFavorite ? 'var(--red)' : 'var(--text)'};
          fill: ${(props) => (props.isFavorite ? 'var(--red)' : 'transparent')};
        }
      }
    }
  }

  @media (min-width: 740px) {
    > div {
      &:nth-child(4) {
        h2 {
          font-size: 2.25rem;
        }
      }
    }
  }
`;

export const Controls = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 0 1rem 1rem 1rem;
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

  @media (min-width: 740px) {
    button {
      svg {
        display: none;
      }

      span {
        display: block;
        padding: 0.75rem;
      }

      &:last-child {
        span {
          color: var(--primary);
          font-weight: 700;
        }
      }
    }
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0.75rem;
  margin: -3rem auto 0 auto;

  background-color: var(--background);
  border: 1px solid var(--gray);
  width: calc(100% - 2rem);
  max-width: 520px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
  max-width: 1120px;

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

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    > div {
      h3 {
        font-size: 1.5rem;
      }

      &:nth-child(1) {
        width: 30%;
      }
      &:nth-child(1) {
        width: 65%;
      }
      & + div {
        margin-top: 0;
      }
    }
  }
`;

export const Ingredients = styled.div`
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    max-width: 650px;

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

  @media (min-width: 640px) {
    ul {
      li + li {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media (min-width: 900px) {
    ul {
      flex-direction: column;
      flex-wrap: inherit;
      max-width: inherit;

      li + li {
        margin-top: 0.5rem;
        margin-bottom: 0;
      }
    }
  }
`;

export const Directions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    p {
      line-height: 2rem;
    }

    strong {
      font-size: 1rem;
      display: block;
    }

    p + strong {
      margin-top: 1rem;
    }
  }
`;
