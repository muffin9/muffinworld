import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/reset.css';

import Layout from '@/components/Layout';
import client from '@/lib/apolloClient';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Secruity-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
