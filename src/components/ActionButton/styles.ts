import styled from 'styled-components'

export const Button = styled.button`
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  border: none;
  border-radius: 0.5rem;

  background: #f5f5f5;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  div {
    height: 100%;
    width: calc(24px + 2rem);
    background-color: var(--yellow-500);
    color: var(--gray-850);

    padding: 1rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    right: 0;

    transition: width 0.5s;

    svg {
      width: 24px;
      height: auto;

      margin-left: auto;

      color: #ffffff;
    }
  }

  span {
    padding: 1rem 0;
    margin-right: calc(24px + 2.5rem);

    z-index: 999;
    font-size:1.125rem;
    color: var(--gray-800);

    transition: color 0.5s;
  }

  &:hover {
    div {
      width: 100%;
    }

    span {
      color: #ffffff;
    }
  }
`;