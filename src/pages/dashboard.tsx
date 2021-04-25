import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import {
  FiBarChart,
  FiChevronDown,
  FiClock,
  FiHeart,
  FiSearch,
  FiUsers,
} from 'react-icons/fi';

import { categoryOptions } from '../utils/categoriesOptions';

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
} from '../styles/pages/Dashboard';
import { RecipeCard } from '../components/RecipeCard';

interface RecipeProps {
  id: string;
  name: string;
  category: string;
  favorite: boolean;
  image: string;
  preparationTime: string;
  yield: string;
  level: string;
  ingredients: string;
  directions: string;
  createdAt: string;
  updatedAt: string;
}

export default function Dashboard(): JSX.Element {
  const [favoriteRecipes, setFavoriteRecipes] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('default');
  const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false);
  const [recipeList, setRecipeList] = useState<RecipeProps[]>(
    [] as RecipeProps[],
  );

  useEffect(() => {
    async function getData(): Promise<void> {
      const response = await api.get('/recipes');
      const recipes = response.data;

      setRecipeList([...recipes]);
    }

    getData();
  }, []);

  function handleSelectedCategory(type: string): void {
    setCategory(type);
    setSelectMenuIsOpen(false);
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
            <button
              type="button"
              className={!favoriteRecipes ? 'active' : ''}
              onClick={() => setFavoriteRecipes(false)}
            >
              Todas
            </button>
            <button
              type="button"
              className={favoriteRecipes ? 'active' : ''}
              onClick={() => setFavoriteRecipes(true)}
            >
              Favoritas
            </button>

            <SelectMenu menuIsOpen={selectMenuIsOpen}>
              <span>{categoryOptions[category]}</span>
              <button
                type="button"
                onClick={() => setSelectMenuIsOpen(!selectMenuIsOpen)}
              >
                <FiChevronDown />
              </button>
              <div>
                <button
                  type="button"
                  onClick={() => handleSelectedCategory('default')}
                >
                  Categoria
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectedCategory('meal')}
                >
                  Refeição
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectedCategory('pasta')}
                >
                  Massas
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectedCategory('snacks')}
                >
                  Lanches
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectedCategory('deserts')}
                >
                  Sobremesas
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectedCategory('cakes')}
                >
                  Bolos
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectedCategory('fitness')}
                >
                  Fitness
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectedCategory('salads')}
                >
                  Saladas
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectedCategory('vegetarian')}
                >
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
          {recipeList &&
            recipeList.map((recipe) => {
              if (
                ((category === recipe.category || category === 'default') &&
                  favoriteRecipes === recipe.favorite) ||
                ((category === recipe.category || category === 'default') &&
                  favoriteRecipes === false)
              ) {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
              }
            })}
        </RecipesList>
      </Content>
    </Container>
  );
}
