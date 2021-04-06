import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background: #ffffff;

  border-bottom: 0.5px solid #cccccc;

  margin-bottom: 2rem;

  > div {
    max-width: 1170px;
    padding: 1rem;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      margin-left: 0;
      margin-right: auto;
    }
  }
`;

export const BurgerMenu = styled.button`
  border: none;
  background: transparent;
  
  padding: 0.5rem;

  span {
    display: block;

    width: 24px;
    height: 2px;
    background: var(--gray-800);
  }

  span + span {
    margin-top: 0.4rem;
  }

  @media(min-width: 720px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media(min-width: 720px) {
    display: flex;
    align-items: center;

    > a {
      display: block;

      svg {
        width: 24px;
        height: auto;
        color: var(--gray-800);
      }

      & + a {
        margin: 0 3rem;
      }
    }

    > div {
      display: flex;
      align-items: center;

      margin-right: 3rem;

      > img {
        width: 48px;
        height: auto;

        border-radius: 50%;

        margin-right: 1rem;
      }
      
      > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        strong {
          font-size: 1rem;
        }

        span {
          font-size: 0.9rem;
          color: #bbbbbb;
        }
      }
    }

    > button {
      border: none;
      background: transparent;
      color: var(--gray-800);
    }
  }
`;
