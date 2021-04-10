import React, { useState } from "react";
import { FiBarChart, FiChevronLeft, FiClock, FiEdit, FiStar, FiTrash, FiUsers } from "react-icons/fi";

import { ActionButton } from "../components/ActionButton";
import { Header } from "../components/Header";
import { EditRecipeModal } from "../components/EditRecipeModal";


import { Container, Content, RecipeInfo, SimpleButtonContainer, ActionButtonContainer, Button, Gallery, RecipeDetails } from '../styles/pages/Recipe'
import { DeleteRecipeModal } from "../components/DeleteWarningModal";

export default function Recipe() {

  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [currentImage, setCurrentImage] = useState<string>('image1.jpg')
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false)
  
  function handleEditRecipe() {
    console.log('abriu')
    setEditModalIsOpen(true)
  }

  function closeEditModal() {
    setEditModalIsOpen(false)
  }
  
  function handleDeleteRecipe() {
    console.log('abriu')
    setDeleteModalIsOpen(true)
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false)
  }

  return (
    <Container>
      <Header />

      <Content>
        <nav>
          <Button type="button">
            <FiChevronLeft />
          </Button>

          <SimpleButtonContainer>
            <Button type="button" onClick={handleEditRecipe}>
              <FiEdit />
            </Button>
            <Button type="button" onClick={handleDeleteRecipe} >
              <FiTrash />
            </Button>
          </SimpleButtonContainer>

          <ActionButtonContainer>
            <ActionButton property="Edit" icon={FiEdit} onClick={handleEditRecipe} />
            <ActionButton property="Delete" icon={FiTrash} onClick={handleDeleteRecipe} />
          </ActionButtonContainer>
        </nav>

        <EditRecipeModal 
          editModalIsOpen={editModalIsOpen} 
          closeModal={closeEditModal} 
        />

        <DeleteRecipeModal 
          deleteModalIsOpen={deleteModalIsOpen} 
          closeModal={closeDeleteModal} 
        />

        <div>
          <h1>Filé com fritas</h1>
          <button type="button" onClick={() => setIsFavorite(!isFavorite)}>
            <img src={`/icons/${isFavorite ? 'favorite' : 'no-favorite'}.svg`} alt={isFavorite ? 'Favorite' : 'Unfavorite'}/>
          </button>
        </div>

        <p>“It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”</p>

        <RecipeInfo>
          <div>
            <FiClock />
            <p>30 minutes</p>
          </div>
          <div>
            <FiUsers />
            <p>2 people</p>
          </div>
          <div>
            <FiBarChart />
            <p>Easy</p>
          </div>
        </RecipeInfo>

        <Gallery>
          <div>
            <img src={`/images/${currentImage}`} alt={currentImage}/>
          </div>
          <section>
            <button type="button" onClick={() => setCurrentImage('image1.jpg')}>
              <img src="/images/image1.jpg" alt="image1"/>
            </button>
            <button type="button" onClick={() => setCurrentImage('image2.png')}>
              <img src="/images/image2.png" alt="image2"/>
            </button>
            <button type="button" onClick={() => setCurrentImage('image3.jpg')}>
              <img src="/images/image3.jpg" alt="image3"/>
            </button>
          </section>
        </Gallery>

        <RecipeDetails>
          <section>
            <h2>Ingredients</h2>
            <ul>
              <li>700g de contra filé fffajfu
                fhaujf
                hafkakjkfjjsfjajfjahjskfkajkj</li>
              <li>700g de contra filé</li>
              <li>700g de contra filé</li>
              <li>700g de contra filé</li>
              <li>700g de contra filé</li>
              <li>700g de contra filé</li>
            </ul>
          </section>

          <section>
            <h2>Directions</h2>
            <div>
              Comece temperando a carne, ainda crua, com sal e pimenta-do-reino (a gosto).
              Em uma panela, coloque uma quantidade pequena de óleo, leve em fogo médio e despeje a cebola com o alho. <br/>
              Em seguida, coloque a carne temperada e refogue até o ponto desejado.
              Abaixe o fogo e adicione a mussarela <br/>
              Continue refogando a carne, até o queijo derreter, quando estiver derretido, desligue o fogo. <br/>
              Corte as batatas em tiras e frite em óleo quente. <br/>
              Ao terminar de fazer o contra filé e as batatas, coloque num tabuleiro e acrescente o restante do queijo mussarela. <br/>
              Ideal, colocar ainda quente para o queijo derreter.
              E está pronto! <br/>
              Muito fácil e gostoso. <br/>
            </div>
          </section>
        </RecipeDetails>

        
      </Content>
    </Container>
  )
}