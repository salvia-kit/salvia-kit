import Document, { Html, Head, Main, NextScript } from 'next/document';
import favicons from '@/data/favicons.json';

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
          {favicons.map((item) => (
            <link
              key={item.sizes}
              rel={item.rel}
              type={item.type || ''}
              sizes={item.sizes}
              href={item.href}
            />
          ))}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="text-[#14445c] dark:text-white dark:bg-dark bg-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
