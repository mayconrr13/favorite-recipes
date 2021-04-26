/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useRouter } from 'next/dist/client/router';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../services/api';
import { getRandomImage } from '../utils/getRandomImage';

interface RecipeProviderProps {
  children: ReactNode;
}

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

interface RecipeContextData {
  addRecipe: () => Promise<void>;
  editRecipe: (recipe: RecipeProps, isFavorite: boolean) => Promise<void>;
  deleteRecipe: (id: string) => Promise<void>;
  toogleFavorite: (id: string, isFavorite: boolean) => Promise<void>;
  favoriteList: string[];
  setFavoriteList: (favoriteList: string[]) => void;
}

const RecipeContext = createContext<RecipeContextData>({} as RecipeContextData);

export function RecipeProvider({ children }: RecipeProviderProps) {
  const router = useRouter();

  const [favoriteList, setFavoriteList] = useState<string[]>([] as string[]);

  function addToFavoriteList(id: string): void {
    setFavoriteList([...favoriteList, id]);
    localStorage.setItem('@favorites', JSON.stringify([...favoriteList, id]));
  }

  function removeFromFavoriteList(id: string): void {
    const updatedList = favoriteList.filter((item) => item !== id);

    setFavoriteList([...updatedList]);
    localStorage.setItem('@favorites', JSON.stringify([...updatedList]));
  }

  //add recipe
  async function addRecipe(): Promise<void> {
    const newImage = await getRandomImage();

    try {
      const newRecipe = {
        category: 'meal',
        createdAt: '12/04/2021',
        directions:
          '<strong>Calda de Mirtilo</strong><p>Ferva o mel, o açúcar demerara, os mirtilos e a água até reduzir à metade do volume original. Reserve.</p><strong>Panquecas</strong><p>Em uma tigela grande, misture as farinhas, o açúcar, o fermento em pó e sal. Em outra tigela, bata os ovos e, em seguida, acrescente o leite e a baunilha.</p><p> Derreta a manteiga em uma frigideira grande de ferro fundido ou chapa em fogo médio. Bata a manteiga na mistura de leite. Adicione os ingredientes molhados à mistura de farinha e bata até formar uma massa grossa. Não misture demais, a massa não precisa ser totalmente homogênea.</p><p>Mantendo a frigideira em fogo médio, despeje uma concha (equivalente a ¼ xícara) de massa na frigideira, para fazer uma panqueca. Faça mais uma ou duas panquecas, tendo o cuidado de mantê-las uniformemente espaçadas.</p><p>Cozinhe até que apareçam bolhas na superfície das panquecas, e as partes inferiores fiquem douradas, por cerca de dois minutos. Vire com uma espátula e deixe cozinhar cerca de um minuto a mais no segundo lado.</p><p>Sirva imediatamente ou transfira para uma travessa e cubra frouxamente com papel-alumínio para manter aquecido. Repita com a massa restante, acrescentando mais manteiga na frigideira quando necessário. Sirva com calda de mirtilos a gosto.</p>',
        id: uuidv4(),
        image: newImage,
        ingredients:
          '<ul><li>1/4 de xícara de chá de mel silvestre</li> <li>1/4 de xícara de chá de mel silvestre </li> <li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li></ul>',
        isFavorite: false,
        level: 'Iniciante',
        name: `Panquecas${Math.floor(Math.random() * 100)}`,
        preparationTime: '20 minutos',
        updatedAt: '15/04/2021',
        yield: '1 pessoas',
      };

      await api.post('/recipes', newRecipe);

      if (router.asPath === '/dashboard') {
        router.reload();
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      console.log('Erro ao adicionar uma nova receita');
    }
  }

  //edite recipe
  async function editRecipe(
    recipe: RecipeProps,
    isFavorite: boolean,
  ): Promise<void> {
    try {
      recipe.name = 'Só panquecas fav 4';
      recipe.isFavorite = isFavorite;

      await api.put(`/recipes/${recipe.id}`, { ...recipe });
      router.reload();
    } catch (error) {
      console.log('Erro ao tentar editar sua receita');
    }
  }

  //delete recipe
  async function deleteRecipe(id: string): Promise<void> {
    try {
      if (favoriteList.includes(id)) {
        removeFromFavoriteList(id);
      }

      await api.delete(`/recipes/${id}`);

      router.push('/dashboard');
    } catch (error) {
      console.log('Erro ao remover a receita');
    }
  }

  //toggle favorite recipe
  async function toogleFavorite(id: string, isFavorite): Promise<void> {
    try {
      await api.patch(`/recipes/${id}`, {
        isFavorite: !isFavorite,
      });

      const storagedList = localStorage.getItem('@favorites');

      if (storagedList) {
        if (isFavorite) {
          //true para false -> remove
          removeFromFavoriteList(id);
        } else {
          //false para true -> adiciona
          addToFavoriteList(id);
        }
      } else {
        if (!isFavorite) {
          addToFavoriteList(id);
        }
      }
    } catch (error) {
      if (isFavorite) {
        console.log('Erro ao remover receita da lista de favoritos');
      } else {
        console.log('Erro ao adicionar receita à lista de favoritos');
      }
    }
  }

  return (
    <RecipeContext.Provider
      value={{
        addRecipe,
        editRecipe,
        deleteRecipe,
        toogleFavorite,
        favoriteList,
        setFavoriteList,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipe() {
  const context = useContext(RecipeContext);

  return context;
}
