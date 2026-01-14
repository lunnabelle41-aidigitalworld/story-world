import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="f08c47fec0942fa0" />
        <meta name="monetag" content="6d7093fd1eee3952080b256cacd1f049" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2894915343289598" 
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://quge5.com/88/tag.min.js"
          data-zone="202007"
          async
          data-cfasync="false"
        ></script>
      </Head>
      <body>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}