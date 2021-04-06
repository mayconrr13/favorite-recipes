import Link from 'next/link'
import React from 'react'
import { FiHome, FiSearch } from 'react-icons/fi'

import { Container, BurgerMenu, Navigation } from './styles'

export const Header = () => {
  return (
    <Container>
      <div>
        <img src="/images/logo.svg" alt="Logo" />

        <Navigation>
          <Link href="/dashboard">
            <a>
              <FiHome />
            </a>
          </Link>
          <Link href="/dashboard/search">
            <a>
              <FiSearch />
            </a>
          </Link>
          <div>
            <img src="https://avatars.githubusercontent.com/u/69278888?v=4" alt="Avatar"/>
            <div>
              <strong>Maycon</strong>
              <span>13 recipes</span>
            </div>
          </div>
          <button>
            Log Out
          </button>
        </Navigation>

        <BurgerMenu type="button">
          <span/>
          <span/>
          <span/>
        </BurgerMenu>
      </div>
    </Container>
  )
}
