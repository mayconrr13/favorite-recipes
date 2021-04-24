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
  padding: 1rem;

  > p {
    font-size: 1rem;
    color: var(--text);
    text-align: center;
    margin-top: 1rem;

    strong {
      font-weight: 700;
      color: var(--primary);
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 1.5rem;
  background-color: var(--gray-light);

  input {
    width: 100%;
    display: block;
    height: 100%;
    border: none;
    padding-left: 1rem;
    background-color: transparent;

    outline: none;

    &:placeholder {
      color: #12121270;
    }
  }

  button {
    width: 3rem;
    height: 100%;
    border: none;
    padding: 0.75rem;
    background-color: var(--primary);

    svg {
      width: 1.5rem;
      height: auto;
      color: var(--background);
    }
  }
`;

export const SortOptions = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3rem;

  margin-top: 1rem;
  margin-bottom: 2rem;

  > button {
    height: 100%;
    padding: 0 0.75rem;

    border: none;
    background-color: var(--gray-light);

    transition: all 0.3s;

    & + button {
      margin-left: 0.75rem;
    }

    &:hover,
    &.active {
      background-color: var(--primary);
      color: var(--background);
    }
  }
`;

export const SelectMenu = styled.div`
  margin-left: 0.75rem;
  flex: 1;
  max-width: 100%;
  height: 100%;
  background-color: var(--gray-light);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  span {
    flex: 1;
    padding: 0 0.75rem;
  }

  > button {
    width: 2rem;
    height: 100%;

    outline: none;
    border: none;
    background-color: transparent;
  }

  div {
    position: absolute;
    top: 3rem;
    left: 0;
    z-index: 5;

    display: flex;
    flex-direction: column;
    align-items: center;

    display: none;

    width: 100%;
    height: 13.5rem;
    overflow-y: scroll;

    button {
      width: 100%;
      height: 3rem;

      text-align: center;
      line-height: 3rem;

      background-color: var(--gray-light);
      border: none;
      border-top: 1px solid var(--gray);
      outline: none;

      position: relative;

      &:hover {
        filter: brightness(0.97);

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          z-index: 6;

          width: 0.25rem;
          height: 100%;

          background-color: var(--primary);
          border-radius: 0 0.25rem 0.25rem 0;
        }
      }
    }
  }
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 10rem;

  span {
    margin-bottom: 1rem;
  }

  button {
    height: 3rem;
    padding: 0 0.75rem;

    border: none;
    background-color: var(--primary);
    color: var(--background);

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const RecipesList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div + div {
    margin-top: 2rem;
  }
`;

export const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 300px;
  max-width: 22rem;

  > div {
    width: 100%;
    background-color: tomato;

    background-image: url('/home-background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    border: none;

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: calc(100% - 1.5rem);

    margin-top: -2rem;
    padding: 1rem;

    background-color: var(--background);
    border: 1px solid var(--gray);

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      &:nth-child(1) {
        margin-bottom: 1rem;

        h3 {
          font-size: 1.25rem;
          flex: 1;
        }

        svg {
          width: 1.25rem;
          height: auto;
          color: #242424;
        }
      }

      &:nth-child(2) {
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
            font-size: 0.875rem;
          }
        }
      }
    }
  }
`;
