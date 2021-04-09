import styled, { css } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background: #ffffff;

  border-bottom: 0.5px solid #cccccc;

  margin-bottom: 2rem;

  overflow-x: hidden;

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

    > span {
      width: 0;
      height: 100vh;

      display: block;

      background-color: #121212ee;

      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 500;
      transition: width 0.2s;
    }

    & > main {
      overflow: hidden;
    }
  } 

  span.open {
    width: calc(100vw - 250px);
  }

  @media (min-width: 725px) {
    > div {
      display: flex;
    align-items: center;
    justify-content: space-between;
    }
  }
  
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  opacity: 0;
  transform: translateX(-2rem);
  transition: all 1s;
  
  > a {
    color: var(--gray-800);
    text-decoration: none;

    & + a {
      margin-left: 3rem;
    }

    svg {
      width: 24px;
      height: auto;
    }
  }


  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: static;

    height: 100%;
    opacity: 1;
    padding: 0;
    margin: 0;

    transform: translateX(0);
  }
`;

export const ProfileContainer = styled.div`
  display:flex;
  align-items:center;
  margin-bottom: 1.5rem;

  opacity: 0;
  transform: translateX(-2rem);
  transition: all 1s;

  > img {
    width: 4rem;
    height: auto;
    border-radius: 50%;

    margin-right: 1rem;
  }

  section {
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-between;

    strong {
      color: var(--gray-800);
      font-size: 1.25rem;
    }

    span {
      color: #aaa;
      font-size: 1.2rem;
    }
  }


  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: static;

    height: 100%;
    opacity: 1;
    padding: 0;
    margin: 0 3rem;
    transform: translateX(0);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;

  height: 100vh;
  width: 0;

  background-color: white;

  padding-top: 6rem;
  padding-bottom: 4rem;

  overflow-x: hidden;

  /* transition: all 0.2s; */

  button {
    font-size: 1.25rem;
    border: none;
    background-color: transparent;
    color:var(--gray-800);
    margin-top: auto;
    opacity: 0;
    transform: translateX(-2rem);
    transition: all 1s;
  }

  &.open {
    width: 250px;

    div,
    button {
      opacity: 1;
      transform: translateX(0)
    }
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    position: static;
    margin: 0;
    margin-left: auto;

    width: 500px;
    height: 100%;
    opacity: 1;
    padding: 0;

    button{
      opacity: 1;
      transform: translateX(0);
      margin: 0;
    }
  }
`;

export const BurgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 28px;
  height: 21px;
  z-index: 100;

  border: none;
  background-color: transparent;
  
  > span {
    width: 100%;
    height: 2px;
    background-color: var(--gray-800);
  }

  @media (min-width: 720px) {
    display: none;
  }
`;