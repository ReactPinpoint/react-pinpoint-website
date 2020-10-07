import Head from 'next/head';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
