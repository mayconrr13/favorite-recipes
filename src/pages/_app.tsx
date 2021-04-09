import React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp