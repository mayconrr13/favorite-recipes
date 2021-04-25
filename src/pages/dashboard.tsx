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
} from '../styles/pages/Dashboard';
import { RecipeCard } from '../components/RecipeCard';

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
  const [favoriteRecipes, setFavoriteRecipes] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('default');
  const [selectMenuIsOpen, setSelectMenuIsOpen] = useState(false);
  const [recipeList, setRecipeList] = useState<RecipeProps[]>(
    [] as RecipeProps[],
  );
  const [filteredList, setFilteredList] = useState<RecipeProps[]>(
    [] as RecipeProps[],
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getData(): Promise<void> {
      setIsLoading(true);

      const response = await api.get('/recipes');
      const recipes = response.data;

      setRecipeList([...recipes]);
      setFilteredList([...recipes]);
      setIsLoading(false);
    }

    try {
      console.log('fetch again');
      getData();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  // filter list by selected parameters
  useEffect(() => {
    if (recipeList.length === 0) {
      setFilteredList([]);
    }

    const filteredRecipes = recipeList.filter((recipe) => {
      if (
        ((category === recipe.category || category === 'default') &&
          favoriteRecipes === recipe.isFavorite) ||
        ((category === recipe.category || category === 'default') &&
          favoriteRecipes === false)
      ) {
        return recipe;
      }
    });

    setFilteredList([...filteredRecipes]);
  }, [category, favoriteRecipes, recipeList]);

  function handleSelectedCategory(type: string): void {
    setCategory(type);
    setSelectMenuIsOpen(false);
  }

  async function handleAddNewRecipe(): Promise<void> {
    const newRecipe = {
      category: 'deserts',
      createdAt: '12/04/2021',
      directions:
        '<strong>Calda de Mirtilo</strong><p>Ferva o mel, o açúcar demerara, os mirtilos e a água até reduzir à metade do volume original. Reserve.</p><strong>Panquecas</strong><p>Em uma tigela grande, misture as farinhas, o açúcar, o fermento em pó e sal. Em outra tigela, bata os ovos e, em seguida, acrescente o leite e a baunilha.</p><p> Derreta a manteiga em uma frigideira grande de ferro fundido ou chapa em fogo médio. Bata a manteiga na mistura de leite. Adicione os ingredientes molhados à mistura de farinha e bata até formar uma massa grossa. Não misture demais, a massa não precisa ser totalmente homogênea.</p><p>Mantendo a frigideira em fogo médio, despeje uma concha (equivalente a ¼ xícara) de massa na frigideira, para fazer uma panqueca. Faça mais uma ou duas panquecas, tendo o cuidado de mantê-las uniformemente espaçadas.</p><p>Cozinhe até que apareçam bolhas na superfície das panquecas, e as partes inferiores fiquem douradas, por cerca de dois minutos. Vire com uma espátula e deixe cozinhar cerca de um minuto a mais no segundo lado.</p><p>Sirva imediatamente ou transfira para uma travessa e cubra frouxamente com papel-alumínio para manter aquecido. Repita com a massa restante, acrescentando mais manteiga na frigideira quando necessário. Sirva com calda de mirtilos a gosto.</p>',
      id: '7',
      image: '/home-background.jpg',
      ingredients:
        '<ul><li>1/4 de xícara de chá de mel silvestre</li> <li>1/4 de xícara de chá de mel silvestre </li> <li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li></ul>',
      isFavorite: false,
      level: 'Iniciante',
      name: 'Panquecas com mirtilo242',
      preparationTime: '20 minutos',
      updatedAt: '15/04/2021',
      yield: '1 pessoas',
    };

    await api.post('/recipes', newRecipe);

    setRecipeList([...recipeList, newRecipe]);
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
        {!isLoading && recipeList.length === 0 && filteredList.length === 0 && (
          <EmptyList>
            <span>Você não possui nenhuma receita</span>
            <button type="button">Nova receita</button>
          </EmptyList>
        )}

        {/* empty recipe list after select category or meda a search */}
        {!isLoading && filteredList.length === 0 && recipeList.length !== 0 && (
          <EmptyList>
            <span>Nenhum resultado encontrado</span>
          </EmptyList>
        )}

        {isLoading && recipeList.length === 0 && <p>loading...</p>}

        {/* recipe */}
        <RecipesList>
          {filteredList &&
            filteredList.map((recipe) => {
              return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
        </RecipesList>
      </Content>
    </Container>
  );
}
