import styled, { css } from 'styled-components'

interface InputProps {
  hasCloseIcon: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }


  > div {
    background-color: #e8e8e8;
    border: none;
    border-radius: 0.5rem;
    padding: 1.5rem;

    width: 100%;

    input {
      width: 100%;
      color: var(--gray-850);

      border: none;
      border-radius: 0.5rem;

      background-color: #e8e8e8;

      &::placeholder {
        color: #A9ACBA;
      }
    }
  }

  ${(props) => props.hasCloseIcon && css`
    > div {
      display: flex;
      align-items: center;

      > input {
        margin-right: 1rem;
      }

      > svg {
        width: 24px;
        height: auto;
        color: var(--gray-850);
      }
    }
  `}
`;