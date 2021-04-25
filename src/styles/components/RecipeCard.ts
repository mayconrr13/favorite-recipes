import styled from 'styled-components';

interface RecipesProps {
  image: string;
}

export const Container = styled.div<RecipesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 300px;
  max-width: 22rem;

  > div {
    width: 100%;
    background-color: tomato;

    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    border: none;

    &::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: calc(100% - 1.5rem);

    margin-top: -2rem;
    padding: 1rem;

    background-color: var(--background);
    border: 1px solid var(--gray);

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      &:nth-child(1) {
        margin-bottom: 1rem;

        h3 {
          font-size: 1.25rem;
          flex: 1;
        }

        svg {
          width: 1.25rem;
          height: auto;
          color: #242424;
        }
      }

      &:nth-child(2) {
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          width: 100%;

          & + div {
            margin-left: 0.75rem;
          }

          svg {
            width: 1rem;
            height: auto;
            color: var(--primary);

            margin-bottom: 0.5rem;
          }

          span {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
`;
