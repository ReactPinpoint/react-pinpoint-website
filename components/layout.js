import Head from 'next/head';

export default function Layout({ children, title = 'React Pinpoint' }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          data-n-head="true"
          data-hid="description"
          name="description"
          content="React Pinpoint is an open source utility library for measuring React component render times."
        />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
