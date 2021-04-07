import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 1.5rem;

  h1 {
    color: var(--yellow-500);
    font-size: 1.25rem;
  }

  button {
    border: none;
    background-color: transparent;

    svg {
      width: 1.75rem;
      height: auto;
      color: var(--gray-850);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  
  > div + div {
    margin-top: 1rem;
  } 

  > button {
    background-color: var(--yellow-500);
    border: none;
    border-radius: 0.5rem;

    width: 100%;

    padding: 1.5rem;
    margin-top: 1rem;

    font-weight: bold;
    color: #fff;  

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin-top: 0.5rem;

    > div {
      width: 30%;
      max-width: 160px;

      label {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 90px;
        width: 100%;
        background-color: #e8e8e8;

        border: none;
        border-radius: 0.5rem;

        > svg {
          width: 32px;
          height: auto;
          color: #ccc
        }
      }
    }
    
    input[type= 'file'] {
      display: none;
    }
  }
`;

export const Difficulty = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: row;

    margin-top: 0.5rem;

    color: var(--gray-850);
    background-color: #e8e8e8;

    width: 100%;

    border-radius: 0.5rem;

    > button {
      display: block;
      width: 100%;
      padding: 1.5rem 0;

      border: none;
      background-color: transparent;

      &:first-child {
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:nth-child(2) {
        border-right: 2px solid #fff;
        border-left: 2px solid #fff;
      }

      &:last-child {
        border-radius: 0  0.5rem 0.5rem 0;
      }
    }
  }
`;

export const Ingredients = styled.div`
  width: 100%;

  section {
    width: 100%;
    margin-top: 0.5rem;

    > div {
      width: 100%;

      & + div {
        margin-top: 1rem;
      }
    }
  }

  button {
    background-color: var(--yellow-500);
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1rem auto;
    transition: filter 0.2s;

    > svg {
      width: 28px;
      height: auto; 
      color: var(--gray-850);
      margin: 0;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (min-width: 480px) {
    section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      
      > div {
        max-width: 100%;

        & + div {
          margin-top: 0;
        }
      }
    }
  }
`;

export const Directions = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  textarea {
    border: none;
    border-radius: 0.5rem;
    background-color: #e8e8e8;
    padding: 1rem;
    height: 300px;
    resize: vertical;
  }
`;