import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon-512x512.png" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#005CBD" />
    </Head>
    <body>
      <div id="fb-root" />
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0"
        nonce="CrisBYA4"
      />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
