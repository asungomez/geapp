import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { Container, ThemeProvider } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import { TopBar } from '../components/TopBar/TopBar';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>GEApp</title>
      </Head>
      <ThemeProvider theme={theme}>
        <TopBar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App, {
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
  },
});
