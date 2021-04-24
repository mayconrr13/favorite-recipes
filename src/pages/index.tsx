import Head from 'next/head';

import { HomeContainer, Content } from '../styles/pages/Home';

export default function Home(): JSX.Element {
  return (
    <HomeContainer>
      <Head>
        <title>Home | let&apos;s cook</title>
      </Head>

      <Content>
        <img src="/logo.svg" alt="Logo" />

        <strong>
          O QUE VAMOS
          <br /> PREPARAR HOJE?
        </strong>
        <span>
          <strong>Let&apos;s cook</strong> é uma plataforma que permite
          <br /> você salvar suas melhores receitas e<br /> prepará-las a
          qualquer momento,
          <br /> seja sozinho, com amigos
          <br /> ou família.
        </span>

        <button>
          <div>
            <img src="/icons/google.svg" alt="gmail" />
          </div>
          <span>Entrar com Google</span>
        </button>
      </Content>
    </HomeContainer>
  );
}
