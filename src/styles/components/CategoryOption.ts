import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;

  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: calc(50% - 0.5rem);
    left: 0;
    height: 1rem;
    width: 1rem;
    background-color: var(--gray);
  }

  &:hover input ~ span {
    background-color: #aaa;
  }

  & input:checked ~ span {
    background-color: var(--primary);
  }

  p {
    font-size: 1rem;
  }
`;
