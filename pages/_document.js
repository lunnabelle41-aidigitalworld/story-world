import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="_xAnSYTjZ9yWZeJ4e2YXlHtZ7Of6p3A5TFCMbgDeO-I" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8040019263366199" 
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <div id="ad-container">
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-format="autorelaxed"
               data-ad-client="ca-pub-8040019263366199"
               data-ad-slot="6052662551"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}