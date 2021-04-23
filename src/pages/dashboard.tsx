import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard(): JSX.Element {
  return (
    <>
      <Head>
        <title>Dashboard | let&apos;s cook</title>
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

      <main>
        <p>
          Olá <strong>Maycon</strong>. Você possui <strong>13</strong> receitas.
          <br /> Então... o que vamos preparar hoje?
        </p>

        <div>
          <input type="text" />
          <button>
            <img src="" alt="" />
          </button>
        </div>

        <button type="button">Todas</button>
        <button type="button">Favoritas</button>

        <select name="category" id="category">
          <option value="meal">Refeição</option>
          <option value="pasta">Massas</option>
          <option value="snacks">Lanches</option>
          <option value="desert">Sobremesas</option>
          <option value="cakes">Bolos</option>
          <option value="fitness">Fitness</option>
          <option value="salads">Saladas</option>
          <option value="vegetarian">Vegetariana</option>
        </select>

        {/* empty recipe list */}
        <div>
          <span>Você não ossui nenhuma receita</span>
          <button type="button">Nova receita</button>
        </div>

        {/* empty recipe list after select category or meda a search */}
        <span>Nenhum resultado encontrado</span>

        {/* recipe */}
        <section>
          <div>
            <div>image</div>

            <Link href="/recipe/">
              <a>
                <div>
                  <div>Panquecas com mirtilo</div>
                  <img src="/" alt="favorite" />
                </div>

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
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
