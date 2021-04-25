import styled from 'styled-components';

interface ToggleMenu {
  menuIsOpen: boolean;
}

export const Container = styled.header<ToggleMenu>`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid var(--gray);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    width: 100%;
    max-width: 1152px;

    padding: 1rem;
    margin: 0 auto;

    nav {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;

      transform: ${(props) =>
        props.menuIsOpen ? 'translateY(0)' : 'translateY(-100vh)'};
      opacity: ${(props) => (props.menuIsOpen ? 1 : 0)};

      transition: all 0.5s ease-in-out;

      width: 100vw;
      height: 100vh;
      background-color: var(--background);

      display: flex;
      flex-direction: column;
      align-items: center;

      padding-top: 8rem;

      button {
        border: none;
        background-color: transparent;
        font-size: 1.25rem;

        & + button {
          margin-top: 3rem;
        }

        &:hover {
          font-weight: 700;
          color: var(--primary);
        }
      }
    }

    > button {
      border: none;
      background-color: transparent;
      outline: none;

      z-index: 9999;

      span {
        display: block;
        width: 1.5rem;
        height: 0.125rem;
        background-color: var(--text);
        transform-origin: 1px;

        transition: all 0.5s ease-in-out;

        & + span {
          margin-top: 0.25rem;
        }

        &:nth-child(1) {
          transform: ${(props) =>
            props.menuIsOpen ? 'rotate(32deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
          opacity: ${(props) => (props.menuIsOpen ? 0 : 1)};
          transform: ${(props) =>
            props.menuIsOpen ? 'translateX(0.5rem)' : 'translateX(0)'};
        }

        transform: ${(props) =>
          props.menuIsOpen ? 'rotate(-32deg)' : 'rotate(0)'};
      }
    }
  }

  @media (min-width: 740px) {
    > div {
      nav {
        position: inherit;

        height: inherit;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        margin-right: 0;
        padding: 0;

        opacity: 1;
        transform: translateY(0);

        transition: none;

        button {
          border: none;
          background-color: transparent;
          font-size: 1.25rem;

          & + button {
            margin-left: 3rem;
            margin-top: 0;
          }
        }
      }

      > button {
        display: none;
      }
    }
  }
`;
