import { GetServerSideProps } from 'next';
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
import { api } from '../../services/api';

import {
  Container,
  Content,
  Controls,
  RecipeInfo,
  RecipeDetails,
  Ingredients,
  Directions,
} from '../../styles/pages/Recipe';

interface RecipeProps {
  id: string;
  name: string;
  category: string;
  isFavorite: boolean;
  image: string;
  preparationTime: string;
  yield: string;
  level: string;
  ingredients: string;
  directions: string;
  createdAt: string;
  updatedAt: string;
}

interface SelectedRecipeProps {
  recipe: RecipeProps;
}

export default function Recipe({ recipe }: SelectedRecipeProps): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Receita | {recipe.name}</title>
      </Head>

      <Header />

      <Content isFavorite={recipe.isFavorite}>
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
            <span>{recipe.preparationTime}</span>
          </div>
          <div>
            <FiUsers />
            <span>{recipe.yield}</span>
          </div>
          <div>
            <FiBarChart />
            <span>{recipe.level}</span>
          </div>
        </RecipeInfo>

        <div>
          <h2>{recipe.name}</h2>
          <button type="button" onClick={() => console.log('clicked')}>
            <FiHeart />
          </button>
        </div>

        <RecipeDetails>
          <Ingredients>
            <h3>Ingredientes</h3>
            <div dangerouslySetInnerHTML={{ __html: recipe.ingredients }} />
          </Ingredients>

          <Directions>
            <h3>Modo de preparo</h3>
            <div dangerouslySetInnerHTML={{ __html: recipe.directions }} />
          </Directions>
        </RecipeDetails>
      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const response = await api.get(`/recipes/${id}`);
  const recipe = response.data;

  return {
    props: { recipe },
  };
};
