/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useRecipe } from '../hooks/useRecipe';
import { Container } from '../styles/components/Header';

export const Header = (): JSX.Element => {
  const { addRecipe } = useRecipe();

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const handleCloseMenuDueToWindowWidth = (): void => {
    setWindowWidth(window.innerWidth);

    if (windowWidth >= 740) {
      setMenuIsOpen(false);
    }
    return;
  };

  useEffect(() => {
    window.addEventListener('resize', handleCloseMenuDueToWindowWidth);
    return () => {
      window.removeEventListener('resize', handleCloseMenuDueToWindowWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <Container menuIsOpen={menuIsOpen}>
      <div>
        <img src="/logo-header.svg" alt="logo" />

        <nav onClick={() => setMenuIsOpen(false)}>
          <button type="button" onClick={addRecipe}>
            Nova receita
          </button>
          <button type="button">Sair</button>
        </nav>

        <button type="button" onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </Container>
  );
};
