import classNames from 'classnames';
import { Head, Html, Main, NextScript } from 'next/document';

const DEV_MODE = `${process.env.NEXT_PUBLIC_ENV}` === 'DEV';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Checklist App</title>
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
