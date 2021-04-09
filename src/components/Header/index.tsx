import { signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiHome, FiSearch } from 'react-icons/fi'

import { Container, BurgerMenu, Navigation, LinksContainer, ProfileContainer } from './styles'

export const Header = () => {
  const [{user}] = useSession()
  console.log(user)
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
            <img src={user.image} alt="Avatar"/>
            <section>
              <strong>{user.name.split(' ')[0]}</strong>
              <span>13 recipes</span>
            </section>
          </ProfileContainer>

          <button type="button" onClick={() => signOut()}>
            Log Out
          </button>
        </Navigation>       
      </div>
    </Container>
  )
}
