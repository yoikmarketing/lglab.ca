import Head from 'next/head'
import '../styles/index.css'

function Website({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Website
