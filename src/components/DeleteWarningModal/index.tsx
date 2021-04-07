import React from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import ReactModal from 'react-modal'

import { Message } from './styles'

interface DeleteModalProps {
  deleteModalIsOpen: boolean;
  closeModal: () => void;
}

export const DeleteRecipeModal = ({ deleteModalIsOpen, closeModal }: DeleteModalProps) => {
  return (
    <ReactModal 
      isOpen={deleteModalIsOpen} 
      onRequestClose={closeModal} 
      ariaHideApp={false}
      className="modal-content delete-modal-content"
      overlayClassName="modal-overlay"
    >
      <Message>
        <h1>Are you sure yout wants to<br/> delete this recipe?</h1>
        <p>Once deleted, it can never be recovered.</p>

        <div>
          <button type="submit">
            Cancel
          </button>
          <button type="submit">
            Delete
          </button>
        </div>
      </Message>      
    </ReactModal>
)
}
