import styled from 'styled-components'


export const Card = styled.a`
  width: 327px;
  min-width: 327px;

  position: relative;
  padding: 150px 1rem 1rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.5rem;

  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    object-fit: cover;
    background: #121212;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  section {
    margin: 1rem 0;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
      position: relative; 
      padding-left: 1rem;

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

    > img {
      width: 24px;
      height: auto;
    }
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    svg {
      width: 1rem;
      height: auto;
      color: var(--yellow-500);
    }

    p {
      font-size: 0.9rem;
      padding-top: 0.5rem;
    }
  }
`;