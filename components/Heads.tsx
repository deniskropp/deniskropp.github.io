import Head from 'next/head'

export { Heads }

function Heads({ }) {
  return (
      <Head>
        <title>Denis Kropp</title>
        <meta name="description" content="My personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}
