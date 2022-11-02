import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import '@/styles/reset.css';

import Layout from '@/components/Layout';
import client from '@/lib/apolloClient';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
