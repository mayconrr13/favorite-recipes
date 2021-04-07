import styled from 'styled-components'

export const Message = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;

  h1 {
    font-weight: bold;
    font-size: 1.25rem;
    width: 100%;

    padding-left: 1rem;
    margin-bottom: 1rem;

    position: relative;

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

  p {

    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;

  
    width: 100%;

    button {
      flex: 1;
      padding: 1.5rem;
      border-radius: 0.5rem;
      font-weight: bold;

      transition: filter 0.2s;

      & + button {
        margin-left: 1rem;
      }

      &:hover {
        filter: brightness(0.9);
      }

      &:first-child {
        background-color: #ffffff;
        border: 1px solid var(--gray-800);
        color: var(--gray-800);
      }

      &:last-child {
        background-color: var(--yellow-500);
        border: none;
        color: #ffffff;
      }
    }

  }

`;
