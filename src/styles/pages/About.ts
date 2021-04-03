import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  min-width: 375px;
  max-width: 1170px;

  padding: 1.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    margin-bottom: 3rem;
    margin-right: auto;
  }

  a {
    color: var(--gray-800);
    text-decoration: none;
    font-size: 1.25rem;
  }
`;

export const Content = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  overflow-x: hidden;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-right: auto;
    padding-left: 1rem;

    position: relative;

    &::before {
      content: '';
      width: 8px;
      height: 100%;
      background: var(--yellow-500);
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  img {
    min-width: 250px;
    max-width: 500px;
    width: 100%;

    margin: 0 auto 2rem auto;
  }

  p {
    font-size: 1.25rem;
  }
`;