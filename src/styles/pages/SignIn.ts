import styled from 'styled-components'

export const Container = styled.div`
  min-width: 300px;
  max-width: 450px;
  height: 100vh;
  
  padding: 1.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    margin-bottom: 2rem;
  }

  a {
    color: var(--gray-800);
    text-decoration: none;
    font-size: 1.25rem;
  }
`;

export const Social = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  button + button {
    margin-top: 1rem;
  }
`;