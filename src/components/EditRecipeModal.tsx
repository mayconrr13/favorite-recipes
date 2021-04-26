import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import ReactModal from 'react-modal';
import { categoriesArray } from '../utils/categoriesOptions';
import { CategoryOption } from './CategoryOption';
import { Input } from './Input';

import {
  Header,
  DifficultyLevelBox,
  CategoriesOptions,
  IngredientsList,
  Directions,
  SubmitButton,
  Loading,
} from '../styles/components/AddRecipeModal';
import { useRecipe } from '../hooks/useRecipe';

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

interface EditModalProps {
  isOpen: boolean;
  closeModal: () => void;
  data: {
    recipe: RecipeProps;
    recipeIsFavorite: boolean;
  };
}

export const EditRecipeModal = ({
  isOpen,
  closeModal,
  data,
}: EditModalProps): JSX.Element => {
  const { editRecipe } = useRecipe();

  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState<
    'begginer' | 'intermidiate' | 'advanced'
  >('begginer');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleAddRecipe(): Promise<void> {
    setIsLoading(true);

    const { recipe, recipeIsFavorite } = data;

    await editRecipe(recipe, recipeIsFavorite);

    closeModal();

    setIsLoading(false);
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      {isLoading ? (
        <Loading>
          <span />
        </Loading>
      ) : (
        <>
          <Header>
            <h3>Editar receita</h3>
            <FiX />
          </Header>

          <form>
            <Input id="name" placeholder="Receita" />
            <Input id="image" placeholder="Foto" />
            <Input id="preparationTime" placeholder="Tempo de preparo" />
            <Input id="yield" placeholder="Rendimento" />

            <DifficultyLevelBox>
              <span>Nível de dificuldade</span>
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedDifficultyLevel('begginer')}
                  className={
                    selectedDifficultyLevel === 'begginer' ? 'active' : ''
                  }
                >
                  Iniciante
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDifficultyLevel('intermidiate')}
                  className={
                    selectedDifficultyLevel === 'intermidiate' ? 'active' : ''
                  }
                >
                  Intermediário
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDifficultyLevel('advanced')}
                  className={
                    selectedDifficultyLevel === 'advanced' ? 'active' : ''
                  }
                >
                  Avançado
                </button>
              </div>
            </DifficultyLevelBox>

            <CategoriesOptions>
              <span>Categoria</span>
              <div>
                {categoriesArray.map((category) => {
                  return (
                    <CategoryOption
                      key={Object.keys(category)[0]}
                      id={Object.keys(category)[0]}
                      category={Object.values(category)[0]}
                    />
                  );
                })}
              </div>
            </CategoriesOptions>

            <IngredientsList>
              <label htmlFor="ingredients">Ingredientes</label>
              <textarea
                name="ingredients"
                id="ingredients"
                placeholder="Os ingredientes da receita.."
              />
            </IngredientsList>

            <Directions>
              <label htmlFor="directions">Modo de preparo</label>
              <textarea
                name="directions"
                id="directions"
                placeholder="Modo de preparo da receita..."
              />
            </Directions>

            <SubmitButton type="button" onClick={handleAddRecipe}>
              Salvar alterações
            </SubmitButton>
          </form>
        </>
      )}
    </ReactModal>
  );
};
