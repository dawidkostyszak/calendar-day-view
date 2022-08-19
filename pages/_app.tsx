import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyles from 'components/GlobalStyles';
import Head from 'next/head';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#739abe',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Calendar day view</title>
        <meta name="description" content="Created by Dawid Kostyszak" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
