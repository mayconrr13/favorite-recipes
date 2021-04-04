import styled from 'styled-components'

const colors = {
  Google: '#D44648',
  Facebook: '#3B5998',
  Github: '#414345',
  Twitter: '#00AACE',
  Linkedin: '#0E76A8',
}

interface ButtonProps {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  position: relative;

  border: none;
  border-radius: 0.5rem;

  background: #f5f5f5;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  div {
    height: 100%;
    width: calc(24px + 2.5rem);

    padding: 1.25rem;
    border-radius: 0.5rem;

    background-color: ${props => colors[props.color]};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    transition: width 0.5s;

    img {
      width: 24px;
      height: auto;

      margin-right: auto;
    }
  }

  span {
    padding: 1.25rem 0;
    margin-left: calc(24px + 2.5rem);

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