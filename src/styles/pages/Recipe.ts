import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
`;

export const Content = styled.main`
  button {
    width: 50%;
    display: block;
  }
`;

export const RecipeInfo = styled.div`
  svg {
    width: 24px;
    height: auto;
  }
`;