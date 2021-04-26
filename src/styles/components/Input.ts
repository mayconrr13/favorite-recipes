import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 3rem;

    border: none;
    background-color: var(--gray);

    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`;
