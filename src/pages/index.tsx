import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Home | let&apos;s cook</title>
      </Head>

      <img src="/" alt="Logo" />

      <strong>O QUE VAMOS PREPARAR HOJE?</strong>
      <span>
        <strong>Let&apos;s cook</strong> é uma plataforma que permite você
        salvar suas melhores receitar e prepará-las a qualquer momento, seja
        sozinho, com amigos ou família.
      </span>

      <button>
        <div>
          <img src="/" alt="gmail" />
        </div>
        <span>Entrar com Google</span>
      </button>
    </div>
  );
}
