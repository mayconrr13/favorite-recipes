import { signOut } from 'next-auth/client'
import Link from 'next/link'
import React, { useState } from 'react'

import { Container, BurgerMenu, Navigation, LinksContainer } from './styles'

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  function handleMenuToggle() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <Container >
      <div>
        <img src="/images/logo.svg" alt="Logo" />

        <BurgerMenu onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </BurgerMenu>

        <span 
          className={menuIsOpen ? 'open' : ''} 
        />

        <Navigation 
          className={menuIsOpen ? 'open' : ''}
        >
          <Link href="/dashboard">
            <a>
              Home
            </a>
          </Link>
          <Link href="/dashboard/search">
            <a>
              Search
            </a>
          </Link>
          <button type="button" onClick={() => signOut()}>
            Log Out
          </button>
        </Navigation>       
      </div>
    </Container>
  )
}
