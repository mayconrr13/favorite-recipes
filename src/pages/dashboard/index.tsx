import React from 'react'
import Link from 'next/link'
import { FiPlus} from 'react-icons/fi'

import { Container, Content, FavoriteContainer, RecipesContainer } from '../../styles/pages/Dashboard'

import { Header } from '../../components/Header'
import { RecipeCard } from '../../components/RecipeCard'
import { ActionButton } from '../../components/ActionButton'

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Welcome,<strong>Maycon</strong>!</h1>

        <ActionButton property="Add new recipe" icon={FiPlus} />

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
