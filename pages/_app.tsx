import type { AppProps } from 'next/app';
import '@/src/styles/globals.css';
import '@/src/styles/custom.css';
import Layout from '@/src/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
