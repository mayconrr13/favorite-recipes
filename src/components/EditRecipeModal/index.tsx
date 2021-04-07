import React from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import ReactModal from 'react-modal'

import { Input } from '../Input'

import { Header, Form, Images, Difficulty, Ingredients, Directions } from './styles'

interface EditModalProps {
  editModalIsOpen: boolean;
  closeModal: () => void;
}

export const EditRecipeModal = ({ editModalIsOpen, closeModal }: EditModalProps) => {
  return (
    <ReactModal 
      isOpen={editModalIsOpen} 
      onRequestClose={closeModal} 
      ariaHideApp={false}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <Header>
        <h1>Edit recipe</h1>
        <button type="button">
          <FiX />
        </button>
      </Header>

      <Form>
        <Input name="Recipe" />
        <Images>
          <label>Images</label>
          <section>
            <div>
              <label htmlFor="image1">
                <FiPlus />
              </label>
              <input type="file" id="image1" />
            </div>
            <div>
              <label htmlFor="image1">
                <FiPlus />
              </label>
              <input type="file" id="image1" />
            </div>
            <div>
              <label htmlFor="image1">
                <FiPlus />
              </label>
              <input type="file" id="image1" />
            </div>
          </section>
        </Images>
        <Input name="Preparation time" />
        <Input name="Yield" />
        <Difficulty>
          <label>Difficulty</label>
          <div>
            <button type="button" >Easy</button>
            <button type="button">Medium</button>
            <button type="button">Hard</button>
          </div>
        </Difficulty>
        <Ingredients>
          <label>Ingredients</label>
            <section>
              <Input name="Ingredient" withLabel={false} hasCloseIcon={true}></Input>
              <Input name="Ingredient" withLabel={false} hasCloseIcon={true}></Input>
              <Input name="Ingredient" withLabel={false} hasCloseIcon={true}></Input>
            </section>
          <button type="button">
            <FiPlus />
          </button>
        </Ingredients>
        <Directions>
          <label>Directions</label>
          <textarea placeholder="Type the directions here..."></textarea>
        </Directions>
        <button type="submit">
          Edit recipe
        </button>
      </Form>
    </ReactModal>
)
}
