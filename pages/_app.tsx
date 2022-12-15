import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { Container, ThemeProvider } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import { TopBar } from '../components/TopBar/TopBar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { configureAmplify } from '../amplify/configure';
import { AuthProvider } from '../components/AuthProvider/AuthProvider';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    configureAmplify((router.locale as 'es' | 'en') || 'es');
  }, [router.locale]);
  return (
    <>
      <Head>
        <title>GEApp</title>
      </Head>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <TopBar />
          <Container>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default appWithTranslation(App, {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
});
