import Link from 'next/link';
import { FiBarChart, FiClock, FiHeart, FiUsers } from 'react-icons/fi';

import { Container } from '../styles/components/RecipeCard';

interface RecipeProps {
  id: string;
  name: string;
  category: string;
  favorite: boolean;
  image: string;
  preparationTime: string;
  yield: string;
  level: string;
}

interface RecipeCardProps {
  recipe: RecipeProps;
}

export const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  return (
    <Container key={recipe.id} image={recipe.image}>
      <div />

      <Link href={`/recipe/${recipe.name}`}>
        <a>
          <div>
            <h3>{recipe.name}</h3>
            <FiHeart />
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
        </a>
      </Link>
    </Container>
  );
};