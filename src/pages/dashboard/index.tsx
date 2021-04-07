import React, { useState } from 'react'
import Link from 'next/link'
import { FiPlus} from 'react-icons/fi'

import { Container, Content, FavoriteContainer, RecipesContainer } from '../../styles/pages/Dashboard'

import { Header } from '../../components/Header'
import { RecipeCard } from '../../components/RecipeCard'
import { ActionButton } from '../../components/ActionButton'
import { AddRecipeModal } from '../../components/AddRecipeModal'

export default function Dashboard() {
  const [addModalIsOpen, setAddModalIsOpen] = useState<boolean>(false)
  function handleAddNewRecipe() {
    console.log('abriu')
    setAddModalIsOpen(true)
  }

  function closeModal() {
    setAddModalIsOpen(false)
  }

  return (
    <Container>
      <Header />
      <Content>
        <h1>Welcome,<strong>Maycon</strong>!</h1>

        <ActionButton property="Add new recipe" icon={FiPlus} onClick={handleAddNewRecipe}/>

        <AddRecipeModal 
          addModalIsOpen={addModalIsOpen} 
          closeModal={closeModal} 
        />

        <h2>Favorites</h2>

        <FavoriteContainer>
          <div>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        </FavoriteContainer>

        <h2>All <span/></h2>

        <RecipesContainer>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </RecipesContainer>
      </Content>
    </Container>
  )
}
