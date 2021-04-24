import Head from 'next/head';
import Link from 'next/link';
import {
  FiBarChart,
  FiChevronDown,
  FiClock,
  FiHeart,
  FiSearch,
  FiUsers,
} from 'react-icons/fi';

import { Header } from '../components/Header';

import {
  Container,
  Content,
  Controls,
  SearchBox,
  SortOptions,
  SelectMenu,
  EmptyList,
  RecipesList,
  Recipe,
} from '../styles/pages/Dashboard';

export default function Dashboard(): JSX.Element {
  function hello(): void {
    console.log('hello');
  }

  return (
    <Container>
      <Head>
        <title>Dashboard | let&apos;s cook</title>
      </Head>

      <Header />

      <Content>
        <p>
          Olá <strong>Maycon</strong>. Você possui <strong>13</strong> receitas.
          <br /> Então... o que vamos preparar hoje?
        </p>

        <Controls>
          <SearchBox>
            <input type="text" placeholder="Receita" />
            <button>
              <FiSearch />
            </button>
          </SearchBox>

          <SortOptions>
            <button type="button" className="active">
              Todas
            </button>
            <button type="button">Favoritas</button>

            <SelectMenu className="active">
              <span>Categoria</span>
              <button type="button">
                <FiChevronDown />
              </button>
              <div>
                <button type="button" onClick={hello}>
                  Categoria
                </button>
                <button type="button" onClick={hello}>
                  Refeição
                </button>
                <button type="button" onClick={hello}>
                  Massas
                </button>
                <button type="button" onClick={hello}>
                  Lanches
                </button>
                <button type="button" onClick={hello}>
                  Sobremesas
                </button>
                <button type="button" onClick={hello}>
                  Bolos
                </button>
                <button type="button" onClick={hello}>
                  Fitness
                </button>
                <button type="button" onClick={hello}>
                  Saladas
                </button>
                <button type="button" onClick={hello}>
                  Vegetariana
                </button>
              </div>
            </SelectMenu>
          </SortOptions>
        </Controls>

        {/* empty recipe list */}
        {/* <EmptyList>
          <span>Você não possui nenhuma receita</span>
          <button type="button">Nova receita</button>
        </EmptyList> */}

        {/* empty recipe list after select category or meda a search */}
        {/* <EmptyList>
          <span>Nenhum resultado encontrado</span>
        </EmptyList> */}

        {/* recipe */}
        <RecipesList>
          <Recipe>
            <div />

            <Link href="/recipe/1">
              <a>
                <div>
                  <h3>Panquecas com mirtilo</h3>
                  <FiHeart />
                </div>

                <div>
                  <div>
                    <FiClock />
                    <span>30 minutos</span>
                  </div>
                  <div>
                    <FiUsers />
                    <span>2 pessoas</span>
                  </div>
                  <div>
                    <FiBarChart />
                    <span>Iniciante</span>
                  </div>
                </div>
              </a>
            </Link>
          </Recipe>
          <Recipe>
            <div />

            <Link href="/recipe/1">
              <a>
                <div>
                  <h3>Panquecas com mirtilo</h3>
                  <FiHeart />
                </div>

                <div>
                  <div>
                    <FiClock />
                    <span>30 minutos</span>
                  </div>
                  <div>
                    <FiUsers />
                    <span>2 pessoas</span>
                  </div>
                  <div>
                    <FiBarChart />
                    <span>Iniciante</span>
                  </div>
                </div>
              </a>
            </Link>
          </Recipe>
          <Recipe>
            <div />

            <Link href="/recipe/1">
              <a>
                <div>
                  <h3>Panquecas com mirtilo</h3>
                  <FiHeart />
                </div>

                <div>
                  <div>
                    <FiClock />
                    <span>30 minutos</span>
                  </div>
                  <div>
                    <FiUsers />
                    <span>2 pessoas</span>
                  </div>
                  <div>
                    <FiBarChart />
                    <span>Iniciante</span>
                  </div>
                </div>
              </a>
            </Link>
          </Recipe>
          <Recipe>
            <div />

            <Link href="/recipe/1">
              <a>
                <div>
                  <h3>Panquecas com mirtilo</h3>
                  <FiHeart />
                </div>

                <div>
                  <div>
                    <FiClock />
                    <span>30 minutos</span>
                  </div>
                  <div>
                    <FiUsers />
                    <span>2 pessoas</span>
                  </div>
                  <div>
                    <FiBarChart />
                    <span>Iniciante</span>
                  </div>
                </div>
              </a>
            </Link>
          </Recipe>
        </RecipesList>
      </Content>
    </Container>
  );
}
