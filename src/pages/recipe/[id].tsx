import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useState } from 'react';

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
import { useRecipe } from '../../hooks/useRecipe';
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
  const { editRecipe, deleteRecipe, toogleFavorite } = useRecipe();
  const router = useRouter();

  const [recipeIsFavorite, setRecipeIsFavorite] = useState<boolean>(
    recipe.isFavorite,
  );

  function handleBackToDashboard(): void {
    router.push('/dashboard');
  }

  async function handleFavoriteRecipe(id: string): Promise<void> {
    await toogleFavorite(id, recipeIsFavorite);
    setRecipeIsFavorite(!recipeIsFavorite);
  }

  return (
    <Container>
      <Head>
        <title>Receita | {recipe.name}</title>
      </Head>

      <Header />

      <Content isFavorite={recipeIsFavorite} image={recipe.image}>
        <Controls>
          <button type="button" onClick={handleBackToDashboard}>
            <FiChevronLeft />
            <span>Voltar</span>
          </button>
          <button
            type="button"
            onClick={() => editRecipe(recipe, recipeIsFavorite)}
          >
            <FiEdit />
            <span>Editar</span>
          </button>
          <button type="button" onClick={() => deleteRecipe(recipe.id)}>
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
          <button type="button" onClick={() => handleFavoriteRecipe(recipe.id)}>
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
