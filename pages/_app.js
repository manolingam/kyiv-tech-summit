import { ChakraProvider } from '@chakra-ui/react';

import Router from 'next/router';
import nProgress from 'nprogress';

import '../styles/globals.css';
import '../styles/nprogress.css';

import AppContextProvider from '../context/AppContext';
import { Layout } from '../shared/Layout';
import { theme } from '../styles/theme';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AppContextProvider>
  );
}

export default MyApp;
