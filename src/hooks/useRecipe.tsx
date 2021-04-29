/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../services/api';

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
  createdAt: Date;
  updatedAt: Date;
}

interface RecipeContextData {
  addRecipe: (recipe: Omit<RecipeProps, 'id'>) => Promise<void>;
  editRecipe: (recipe: RecipeProps) => Promise<void>;
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
  async function addRecipe(recipe: Omit<RecipeProps, 'id'>): Promise<void> {
    try {
      const recipeWithId = {
        id: uuidv4(),
        ...recipe,
      };

      await api.post('/recipes', recipeWithId);

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
  async function editRecipe(recipe: RecipeProps): Promise<void> {
    try {
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
