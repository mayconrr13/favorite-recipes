import { useState } from 'react';
import ReactModal from 'react-modal';

import { Content, Loading } from '../styles/components/DeleteRecipeModal';
import { useRecipe } from '../hooks/useRecipe';

interface DeleteModalProps {
  isOpen: boolean;
  closeModal: () => void;
  id: string;
}

export const DeleteRecipeModal = ({
  isOpen,
  closeModal,
  id,
}: DeleteModalProps): JSX.Element => {
  const { deleteRecipe } = useRecipe();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleDeleteRecipe(): Promise<void> {
    setIsLoading(true);

    await deleteRecipe(id);

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
        <Content>
          <h3>Tem certeza que deseja deletar essa receita?</h3>
          <p>Uma vez deletada, a receita nunca mais poderá ser recuperada</p>

          <div>
            <button type="button" onClick={closeModal}>
              Cancelar
            </button>
            <button type="button" onClick={handleDeleteRecipe}>
              Deletar
            </button>
          </div>
        </Content>
      )}
    </ReactModal>
  );
};
