import Head from 'next/head';

export default function Recipe(): JSX.Element {
  return (
    <>
      <Head>
        <title>Receita | Panquecas com mirtilo</title>
      </Head>

      <header>
        <img src="/" alt="logo" />

        <nav>
          <button type="button">Nova receita</button>
          <button type="button">Sair</button>
        </nav>

        <button type="button">
          <span />
          <span />
          <span />
        </button>
      </header>

      <div>
        <button type="button">
          <img src="/" alt="Voltar" />
          <span>Voltar</span>
        </button>
        <button type="button">
          <img src="/" alt="editar" />
          <span>Editar</span>
        </button>
        <button type="button">
          <img src="/" alt="deletar" />
          <span>Deletar</span>
        </button>
      </div>

      <div>image</div>

      <div>
        <div>
          <div>
            <img src="/" alt="clock" />
            <span>30 minutos</span>
          </div>
          <div>
            <img src="/" alt="users" />
            <span>30 minutos</span>
          </div>
          <div>
            <img src="/" alt="signal" />
            <span>30 minutos</span>
          </div>
        </div>
      </div>

      <div>
        <h2>Panquecas com mirtilo</h2>
        <img src="/" alt="favorite" />
      </div>

      <section>
        <div>
          <h3>Ingredients</h3>
          <ul>
            <li>1/4 de xícara de chá de mel silvestre</li>
            <li>1/4 de xícara de chá de mel silvestre</li>
            <li>1/4 de xícara de chá de mel silvestre</li>
            <li>1/4 de xícara de chá de mel silvestre</li>
            <li>1/4 de xícara de chá de mel silvestre</li>
            <li>1/4 de xícara de chá de mel silvestre</li>
            <li>1/4 de xícara de chá de mel silvestre</li>
          </ul>
        </div>

        <div>
          <h3>Modo de preparo</h3>
          <strong>Calda de Mirtilo</strong>
          <p>
            Ferva o mel, o açúcar demerara, os mirtilos e a água até reduzir à
            metade do volume original. Reserve.{' '}
          </p>

          <strong>Panquecas</strong>
          <p>
            Em uma tigela grande, misture as farinhas, o açúcar, o fermento em
            pó e sal. Em outra tigela, bata os ovos e, em seguida, acrescente o
            leite e a baunilha.
          </p>
          <p>
            Derreta a manteiga em uma frigideira grande de ferro fundido ou
            chapa em fogo médio. Bata a manteiga na mistura de leite. Adicione
            os ingredientes molhados à mistura de farinha e bata até formar uma
            massa grossa. Não misture demais, a massa não precisa ser totalmente
            homogênea.
          </p>
          <p>
            Mantendo a frigideira em fogo médio, despeje uma concha (equivalente
            a ¼ xícara) de massa na frigideira, para fazer uma panqueca. Faça
            mais uma ou duas panquecas, tendo o cuidado de mantê-las
            uniformemente espaçadas.
          </p>
          <p>
            Cozinhe até que apareçam bolhas na superfície das panquecas, e as
            partes inferiores fiquem douradas, por cerca de dois minutos. Vire
            com uma espátula e deixe cozinhar cerca de um minuto a mais no
            segundo lado.
          </p>
          <p>
            Sirva imediatamente ou transfira para uma travessa e cubra
            frouxamente com papel-alumínio para manter aquecido. Repita com a
            massa restante, acrescentando mais manteiga na frigideira quando
            necessário. Sirva com calda de mirtilos a gosto.
          </p>
        </div>
      </section>
    </>
  );
}
