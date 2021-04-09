import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import { FiPlus} from 'react-icons/fi'

import { Container, Content, FavoriteContainer, RecipesContainer } from '../../styles/pages/Dashboard'

import { Header } from '../../components/Header'
import { RecipeCard } from '../../components/RecipeCard'
import { ActionButton } from '../../components/ActionButton'
import { AddRecipeModal } from '../../components/AddRecipeModal'

export default function Dashboard() {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    console.log(session)
    if (!session) {
      router.push(`/`)
    } 
  }, [session])
  
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
          </div>
        </FavoriteContainer>

        <h2>All <span/></h2>

        <RecipesContainer>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </RecipesContainer>
      </Content>
    </Container>
  )
}

// buscar lista de receitas no banco de dados com os dados principais (getServerSideProps)