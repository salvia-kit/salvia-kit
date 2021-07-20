import Document, { Html, Head, Main, NextScript } from 'next/document';
import favicons from '@/src/data/favicons.json';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/favicon/manifest.json" />
          {favicons.map((item) => (
            <link
              key={item.sizes}
              rel={item.rel}
              type={item.type || ''}
              sizes={item.sizes}
              href={item.href}
            />
          ))}
        </Head>
        <body className="text-[#14445c] dark:text-white dark:bg-dark bg-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
