import classNames from 'classnames';
import { Head, Html, Main, NextScript } from 'next/document';

const DEV_MODE = `${process.env.NEXT_PUBLIC_ENV}` === 'DEV';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Checklist App</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <body
        className={classNames({
          'debug-screens': DEV_MODE,
        })}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
