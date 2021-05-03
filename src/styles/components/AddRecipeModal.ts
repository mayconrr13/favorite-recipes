import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
    color: var(--primary);
  }

  button {
    border: none;
    background-color: transparent;

    svg {
      width: 1.25rem;
      height: auto;
      color: var(--text);
    }
  }
`;

export const DifficultyLevelBox = styled.div`
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  span {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;

    height: 3rem;
    width: 100%;

    button {
      flex: 1;
      height: 100%;

      font-size: 0.85rem;

      outline: none;
      border: none;
      background-color: var(--gray);

      &:nth-child(2) {
        margin: 0 0.2rem;
      }

      &:hover,
      &.active {
        background-color: var(--primary);
        color: #ffffff;
      }
    }
  }
`;

export const CategoriesOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin-bottom: 1rem;

  span {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;

    > label {
      flex-grow: 1;
      flex-basis: 50%;
    }
  }
`;

export const IngredientsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin-bottom: 1rem;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  textarea {
    border: none;
    resize: none;
    background-color: var(--gray);

    height: 200px;
    padding: 0.5rem;
  }
`;

export const Directions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin-bottom: 2rem;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  textarea {
    border: none;
    resize: none;
    background-color: var(--gray);

    height: 200px;
    padding: 0.5rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 3rem;

  border: none;
  background-color: var(--primary);
  color: #fff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
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
