import Head from 'next/head'

import '../styles/base.css'

function MyApp({ Component, pageProps }) {
  const excerpt = pageProps.data?.excerpt
  const title = pageProps.data?.title

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta property="og:title" content={title || `Ian Huet`} />
        <meta property="og:site_name" content="Ian Huet" />
        <meta
          property="og:description"
          content={excerpt ? excerpt : `Writings about front-end software engineering.`}
        />

        <title>{title || `Ian Huet`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp
