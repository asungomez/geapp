import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ThemeProvider } from '@mui/material';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
