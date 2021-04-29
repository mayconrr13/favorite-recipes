import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;

  position: relative;
  width: 100%;
  height: 3rem;

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
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--gray);
  }

  &:hover input ~ span {
    background-color: #ddd;
  }

  & input:checked ~ span {
    background-color: var(--primary);
  }
  & input:checked ~ p {
    color: #fff;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
    z-index: 2;
  }

  &:nth-child(2) {
    margin: 0 0.2rem;
  }
`;
