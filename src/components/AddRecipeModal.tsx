import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRecipe } from '../hooks/useRecipe';

import { categoriesArray } from '../utils/categoriesOptions';

import { CategoryOption } from './CategoryOption';
import { LevelOption } from './LevelOption';
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

interface FormValues {
  name: string;
  image: string;
  preparationTime: string;
  yield: string;
  level: string;
  category: string;
  ingredients: string;
  directions: string;
}

const recipeSchema = yup.object().shape({
  name: yup.string().required('Insira o nome da receita'),
  image: yup.string().url().required('Insina uma imagem com url válida'),
  preparationTime: yup
    .string()
    .required('Insira o tempo de preparo da receita'),
  yield: yup.string().required('Insira o rendimento da receita'),
  level: yup.string().required('Selecione um nível de dificuldade'),
  category: yup.string().required('Selecione uma categoria'),
  ingredients: yup.string().required('Insira a lista de ingredientes'),
  directions: yup.string().required('Insira o modo de preparo'),
});

interface AddModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const AddRecipeModal = ({
  isOpen,
  closeModal,
}: AddModalProps): JSX.Element => {
  const { addRecipe } = useRecipe();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<string[]>([] as string[]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(recipeSchema),
  });

  useEffect(() => {
    setFormErrors(Object.values(errors).map((error) => error.message));
  }, [errors]);

  async function handleAddRecipe(data: FormValues): Promise<void> {
    setIsLoading(true);

    try {
      const completeData = {
        ...data,
        isFavorite: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await addRecipe(completeData);

      closeModal();

      setIsLoading(false);

      return;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
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

          <form onSubmit={handleSubmit(handleAddRecipe)}>
            <Input id="recipe" label="Receita" {...register('name')} />
            <Input id="image" label="Imagem" {...register('image')} />
            <Input
              id="preparationTime"
              label="Tempo de preparo"
              {...register('preparationTime')}
            />
            <Input id="yield" label="Rendimento" {...register('yield')} />

            <DifficultyLevelBox>
              <span>Nível de dificuldade</span>
              <div>
                <LevelOption
                  type="radio"
                  label="Iniciante"
                  value="Iniciante"
                  checked
                  {...register('level')}
                />
                <LevelOption
                  type="radio"
                  label="Intermediário"
                  value="Intermediário"
                  {...register('level')}
                />
                <LevelOption
                  type="radio"
                  label="Avançado"
                  value="Avançado"
                  {...register('level')}
                />
              </div>
            </DifficultyLevelBox>

            <CategoriesOptions>
              <span>Selecione uma categoria</span>
              <div>
                {categoriesArray.map((category) => {
                  return (
                    <CategoryOption
                      key={Object.keys(category)[0]}
                      value={Object.keys(category)[0]}
                      name="category"
                      label={Object.values(category)[0]}
                      {...register('category')}
                    />
                  );
                })}
              </div>
            </CategoriesOptions>

            <IngredientsList>
              <label htmlFor="ingredients">Ingredientes</label>
              <textarea
                id="ingredients"
                placeholder="Os ingredientes da receita.."
                {...register('ingredients')}
              />
            </IngredientsList>

            <Directions>
              <label htmlFor="directions">Modo de preparo</label>
              <textarea
                id="directions"
                placeholder="Modo de preparo da receita..."
                {...register('directions')}
              />
            </Directions>

            <SubmitButton type="submit">Adicionar receita</SubmitButton>
          </form>
        </>
      )}
    </ReactModal>
  );
};
