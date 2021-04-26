import Head from 'next/head';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

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
  Loading,
} from '../styles/pages/Dashboard';
import { RecipeCard } from '../components/RecipeCard';
import { useRecipe } from '../hooks/useRecipe';
import { AddRecipeModal } from '../components/AddRecipeModal';

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

export default function Dashboard(): JSX.Element {
  const { addRecipe, favoriteList, setFavoriteList } = useRecipe();

  const [favoriteRecipes, setFavoriteRecipes] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('default');
  const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false);
  const [recipeList, setRecipeList] = useState<RecipeProps[]>(
    [] as RecipeProps[],
  );
  const [searchedTerm, setSearchedTerm] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getData(): Promise<void> {
      setIsLoading(true);

      const response = await api.get('/recipes');
      const recipes = response.data;

      //setting recipes
      setRecipeList([...recipes]);

      //setting fevorite list
      const checkingStoragedFavoriteList: string[] = recipes
        .filter((recipe) => recipe.isFavorite)
        .map((recipe) => recipe.id);
      console.log(checkingStoragedFavoriteList);

      localStorage.setItem(
        '@favorites',
        JSON.stringify([...checkingStoragedFavoriteList]),
      );
      setFavoriteList([...checkingStoragedFavoriteList]);
      setIsLoading(false);
    }

    try {
      getData();
    } catch (error) {
      console.log('Erro ao acessar o banco de dados');
      setIsLoading(false);
    }
  }, []);

  function handleSelectedCategory(type: string): void {
    setCategory(type);
    setSelectMenuIsOpen(false);
  }

  function handleAccentuation(string: string): string {
    const parsed = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    return parsed;
  }

  return (
    <Container>
      <Head>
        <title>Dashboard | let&apos;s cook</title>
      </Head>

      <Header />

      <Content>
        {recipeList.length === 0 ? (
          <p>
            Olá <strong>Maycon</strong>.
          </p>
        ) : (
          <p>
            Olá <strong>Maycon</strong>. Você possui{' '}
            <strong>{recipeList.length}</strong> receitas.
            <br /> Então... o que vamos preparar hoje?
          </p>
        )}

        <Controls>
          <SearchBox>
            <input
              type="text"
              placeholder="Receita"
              value={searchedTerm}
              onChange={(e) => setSearchedTerm(e.target.value)}
            />
            <button type="button">
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
        {!isLoading && recipeList.length === 0 && (
          <EmptyList>
            <span>Você não possui nenhuma receita</span>
            <button type="button" onClick={addRecipe}>
              Nova receita
            </button>
          </EmptyList>
        )}

        {/* empty recipe list after select category or meda a search */}
        {/* {!isLoading && filteredList.length === 0 && recipeList.length !== 0 && (
          <EmptyList>
            <span>Nenhum resultado encontrado</span>
          </EmptyList>
        )} */}

        {isLoading && recipeList.length === 0 && (
          <Loading>
            <span />
          </Loading>
        )}

        {/* recipe */}
        <RecipesList>
          {recipeList &&
            recipeList
              .filter((recipe) => {
                if (favoriteRecipes === false) {
                  return recipe;
                }

                return favoriteList.includes(recipe.id);
              })
              .filter((recipe) => {
                if (category === 'default') {
                  return recipe;
                }

                return recipe.category === category;
              })
              .filter((recipe) => {
                if (searchedTerm === '') {
                  return recipe;
                }

                return handleAccentuation(recipe.name.toLowerCase()).includes(
                  handleAccentuation(searchedTerm.toLowerCase()),
                );
              })
              .map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />;
              })}
        </RecipesList>
      </Content>
    </Container>
  );
}
