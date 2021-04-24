import { Container } from '../styles/components/Header';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <div>
        <img src="/logo-header.svg" alt="logo" />

        <nav>
          <button type="button">Nova receita</button>
          <button type="button">Sair</button>
        </nav>

        <button type="button">
          <span />
          <span />
          <span />
        </button>
      </div>
    </Container>
  );
};
