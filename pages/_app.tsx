import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@/src/styles/globals.css';
import metaTags from '@/src/data/metaTags.json';
import Layout from '@/src/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="author" content="Enoch Ndika" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        {metaTags.map((tag) => (
          <meta property={tag.property} content={tag.content} key={tag.id} />
        ))}
      </Head>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
