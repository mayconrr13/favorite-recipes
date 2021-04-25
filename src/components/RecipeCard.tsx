import Link from 'next/link';
import { useState } from 'react';
import { FiBarChart, FiClock, FiHeart, FiUsers } from 'react-icons/fi';
import { useRecipe } from '../hooks/useRecipe';

import { Container } from '../styles/components/RecipeCard';

interface RecipeProps {
  id: string;
  name: string;
  category: string;
  isFavorite: boolean;
  image: string;
  preparationTime: string;
  yield: string;
  level: string;
}

interface RecipeCardProps {
  recipe: RecipeProps;
}

export const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  const { toogleFavorite } = useRecipe();

  const [recipeIsFavorite, setRecipeIsFavorite] = useState<boolean>(
    recipe.isFavorite,
  );

  async function handleFavoriteRecipe(id: string): Promise<void> {
    await toogleFavorite(id, recipeIsFavorite);
    setRecipeIsFavorite(!recipeIsFavorite);
  }

  return (
    <Container
      key={recipe.id}
      image={recipe.image}
      isFavorite={recipeIsFavorite}
    >
      <div />

      <section>
        <div>
          <Link href={`/recipe/${recipe.id}`}>
            <a>{recipe.name}</a>
          </Link>
          <button type="button" onClick={() => handleFavoriteRecipe(recipe.id)}>
            <FiHeart />
          </button>
        </div>

        <div>
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
        </div>
      </section>
    </Container>
  );
};
