import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@/src/styles/globals.css';
import Layout from '@/src/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
