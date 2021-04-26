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

interface AddModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const AddRecipeModal = ({
  isOpen,
  closeModal,
}: AddModalProps): JSX.Element => {
  const { addRecipe } = useRecipe();

  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState<
    'begginer' | 'intermidiate' | 'advanced'
  >('begginer');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleAddRecipe(): Promise<void> {
    setIsLoading(true);

    await addRecipe();

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
            <h3>Nova receita</h3>
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
              Adicionar receita
            </SubmitButton>
          </form>
        </>
      )}
    </ReactModal>
  );
};
