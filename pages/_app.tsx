import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@mui/material';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
