import styled, { keyframes } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;

    width: 100%;
    height: 3rem;

    button {
      flex: 1;
      height: 100%;

      border: none;

      transition: filter 0.2s;

      & + button {
        margin-left: 1rem;
      }

      &:first-child {
        font-weight: 700;
      }

      &:last-child {
        background-color: var(--primary);
        color: #fff;
        font-weight: 700;
      }

      &:hover {
        filter: brightness(0.9);
      }
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
