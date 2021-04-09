import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { signIn, useSession } from 'next-auth/client'

import { SocialButton } from '../components/SocialButton'

import { Container, Social } from '../styles/pages/SignIn'
import { useRouter } from 'next/router'

export default function Signin() {
  const [session] = useSession()
  const router = useRouter()
  if (!!session) {
    router.replace('/dashboard')
  }

  return (
    <Container>
      {!session ? (
        <>
          <Head>
            <title>Sign In | favorite recipes</title>
          </Head>
          
          <header>
            <img src="/images/logo.svg" alt="logo"/>
          </header>
          
          <Social>
            <SocialButton socialMedia="Google" onClick={() => signIn('google')}/>
            <SocialButton socialMedia="Github" onClick={() => signIn('github')}/>
            <SocialButton socialMedia="Linkedin" onClick={() => signIn('linkedin')}/>
          </Social>

          <Link href="/">
            <a>
              Home
            </a>
          </Link>
        </>
      ) : (
        <h1>Loading ...</h1>
      )}
    </Container>
  )
}
