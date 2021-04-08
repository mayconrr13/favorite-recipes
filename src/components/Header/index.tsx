import Link from 'next/link'
import React, { useState } from 'react'
import { FiHome, FiSearch } from 'react-icons/fi'

import { Container, BurgerMenu, Navigation, LinksContainer, ProfileContainer } from './styles'

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  function handleMenuToggle() {
    console.log('toggled')
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
          
          <LinksContainer>
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
          </LinksContainer>

          <ProfileContainer>
            <img src="https://avatars.githubusercontent.com/u/69278888?v=4" alt="Avatar"/>
            <section>
              <strong>Maycon</strong>
              <span>13 recipes</span>
            </section>
          </ProfileContainer>

          <button type="button">
            Log Out
          </button>
        </Navigation>       
      </div>
    </Container>
  )
}
