import Link from 'next/link'
import React from 'react'
import { FiBarChart, FiClock, FiHome, FiSearch, FiUsers } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { RecipeCard } from '../../components/RecipeCard'

import { Container, Content, SearchInput, RecipesContainer } from '../../styles/pages/Search'

export default function Dashboard() {
  return (
    <Container>
      <Header />

      <Content>
        <h1>What are we gonna cook <br/> today, <strong>Maycon</strong>?</h1>

        <SearchInput>
          <input type="text" placeholder="Recipe"/>
          <button type="button">
            <FiSearch />
          </button>
        </SearchInput>

        <h2>Results</h2>

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
