/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { RecipeProvider } from '../hooks/useRecipe';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecipeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecipeProvider>
  );
}

export default MyApp;
