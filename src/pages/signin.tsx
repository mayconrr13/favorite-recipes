import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/client'

import { SocialButton } from '../components/SocialButton'

import { Container, Social } from '../styles/pages/SignIn'
import { useRouter } from 'next/router'
import axios from 'axios'
import { request } from 'node:http'

export default function Signin() {
  const [session] = useSession()
  const router = useRouter()
  if (!!session) {
    router.push('/dashboard')
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
function useFetch(arg0: string): { data: any } {
  throw new Error('Function not implemented.')
}

