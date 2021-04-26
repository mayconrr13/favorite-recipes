import styled from 'styled-components';

interface RecipesProps {
  image: string;
  isFavorite: boolean;
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

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 1.5rem);
    height: 10rem;

    margin-top: -4rem;
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

        a {
          font-size: 1.25rem;
          font-weight: 700;
          flex: 1;
          text-decoration: none;
        }

        button {
          border: none;
          background-color: transparent;
          outline: none;

          margin-left: 1.5rem;

          svg {
            width: 1.5rem;
            height: auto;
            color: ${(props) =>
              props.isFavorite ? 'var(--red)' : 'var(--text)'};
            fill: ${(props) =>
              props.isFavorite ? 'var(--red)' : 'transparent'};
          }
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

  @media (min-width: 1100px) {
    margin: 0 1rem;
  }
`;
