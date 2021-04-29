import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  z-index: -1;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1184px;
  padding: 1rem;

  margin: 0 auto;

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

  @media (min-width: 740px) {
    > p {
      font-size: 1.25rem;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-top: 1.5rem;

  @media (min-width: 740px) {
    flex-direction: row-reverse;
    margin-bottom: 2rem;
  }

  @media (min-width: 1152px) {
    padding: 0 1rem;
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;

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

  @media (min-width: 740px) {
    margin-left: 0.75rem;
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

  @media (min-width: 740px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

interface SelecMenuProps {
  menuIsOpen: boolean;
}

export const SelectMenu = styled.div<SelecMenuProps>`
  margin-left: 0.75rem;
  flex: 1;
  height: 100%;
  background-color: var(--gray-light);

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 50;

  span {
    flex: 1;
    padding: 0 0.75rem;
  }

  > button {
    width: 2rem;
    height: 100%;
    z-index: 500;

    outline: none;
    border: none;
    background-color: transparent;

    svg {
      transition: transform 0.2s ease-in;
      transform: ${(props) =>
        props.menuIsOpen ? 'rotateZ(180deg)' : 'rotateZ(0)'};
    }
  }

  div {
    position: absolute;
    top: 3rem;
    left: 0;
    z-index: 5;

    display: ${({ menuIsOpen }) => (menuIsOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;

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

  @media (min-width: 740px) {
    max-width: 150px;
  }
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;

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

const spinning = keyframes`
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;

  width: 100%;
  height: 10rem;

  span {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid;
    border-color: var(--primary) transparent transparent transparent;

    animation: ${spinning} 1s linear infinite;
  }
`;

export const RecipesList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div + div {
    margin-top: 2rem;
  }

  @media (min-width: 740px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    max-width: 768px;
    margin: 0 auto;

    > div {
      margin-bottom: 2rem;
      justify-content: flex-start;
    }

    > div + div {
      margin-top: 0;
    }
  }

  @media (min-width: 1153px) {
    max-width: 1184px;
    justify-content: flex-start;
  }
`;
