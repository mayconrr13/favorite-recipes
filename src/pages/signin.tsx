import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { SocialButton } from '../components/SocialButton'

import { Container, Social } from '../styles/pages/SignIn'

export default function Signin() {
  return (
    <Container>
      <Head>
        <title>About | favorite recipes</title>
      </Head>
      
      <header>
        <img src="/images/logo.svg" alt="logo"/>
      </header>

      <Social>
        <SocialButton socialMedia="Google" />
        <SocialButton socialMedia="Facebook" />
        <SocialButton socialMedia="Github" />
        <SocialButton socialMedia="Twitter" />
        <SocialButton socialMedia="Linkedin" />
      </Social>

      <Link href="/">
        <a>
          Home
        </a>
      </Link>
    </Container>
  )
}
