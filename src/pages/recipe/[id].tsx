import Head from 'next/head';

import {
  FiBarChart,
  FiChevronLeft,
  FiClock,
  FiUsers,
  FiEdit,
  FiTrash,
  FiHeart,
} from 'react-icons/fi';

import { Header } from '../../components/Header';

import {
  Container,
  Content,
  Controls,
  RecipeInfo,
  RecipeDetails,
  Ingredients,
  Directions,
} from '../../styles/pages/Recipe';

export default function Recipe(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Receita | Panquecas com mirtilo</title>
      </Head>

      <Header />

      <Content>
        <Controls>
          <button type="button">
            <FiChevronLeft />
            <span>Voltar</span>
          </button>
          <button type="button">
            <FiEdit />
            <span>Editar</span>
          </button>
          <button type="button">
            <FiTrash />
            <span>Deletar</span>
          </button>
        </Controls>

        <div />

        <RecipeInfo>
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
        </RecipeInfo>

        <div>
          <h2>Panquecas com mirtilo</h2>
          <FiHeart />
        </div>

        <RecipeDetails>
          <Ingredients>
            <h3>Ingredientes</h3>
            <ul>
              <li>1/4 de xícara de chá de mel silvestre</li>
              <li>1/4 de xícara de chá de mel silvestre </li>
              <li>1/4 de xícara de chá de mel silvestre</li>
              <li>1/4 de xícara de chá de mel silvestre</li>
              <li>1/4 de xícara de chá de mel silvestre</li>
              <li>1/4 de xícara de chá de mel silvestre</li>
              <li>1/4 de xícara de chá de mel silvestre</li>
            </ul>
          </Ingredients>

          <Directions>
            <h3>Modo de preparo</h3>
            <strong>Calda de Mirtilo</strong>
            <p>
              Ferva o mel, o açúcar demerara, os mirtilos e a água até reduzir à
              metade do volume original. Reserve.{' '}
            </p>

            <strong>Panquecas</strong>
            <p>
              Em uma tigela grande, misture as farinhas, o açúcar, o fermento em
              pó e sal. Em outra tigela, bata os ovos e, em seguida, acrescente
              o leite e a baunilha.
            </p>
            <p>
              Derreta a manteiga em uma frigideira grande de ferro fundido ou
              chapa em fogo médio. Bata a manteiga na mistura de leite. Adicione
              os ingredientes molhados à mistura de farinha e bata até formar
              uma massa grossa. Não misture demais, a massa não precisa ser
              totalmente homogênea.
            </p>
            <p>
              Mantendo a frigideira em fogo médio, despeje uma concha
              (equivalente a ¼ xícara) de massa na frigideira, para fazer uma
              panqueca. Faça mais uma ou duas panquecas, tendo o cuidado de
              mantê-las uniformemente espaçadas.
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
          </Directions>
        </RecipeDetails>
      </Content>
    </Container>
  );
}
