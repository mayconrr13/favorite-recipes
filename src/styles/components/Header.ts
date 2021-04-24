import styled from 'styled-components';

export const Container = styled.header`
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
