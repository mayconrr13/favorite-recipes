import Link from 'next/link'
import React from 'react'
import { FiBarChart, FiClock, FiUsers } from 'react-icons/fi'

import { Card, RecipeInfo } from './styles'

export const RecipeCard = () => {
  return (
    <Link href="/recipe">
      <Card>
        <img src="/images/home-image.png" alt="home"/>
        <section>
          <h2>Filé com fritas</h2>
          <img src="/icons/favorite.svg" alt="Favorite"/>
        </section>
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
      </Card>
    </Link>
  )
}
