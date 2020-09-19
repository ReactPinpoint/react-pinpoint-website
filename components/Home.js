import Head from 'next/head';
import Nav from './Nav';

export default function Home(props) {
  return (
    <div>
      <Nav></Nav>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Pinpoint</title>
      </Head>
      <body>
        <div className="p-4 bg-warmgrey-100">
          <h1 className="text-6xl font-semibold leading-normal text-center text-purple-300">React Pinpoint</h1>
          <h2 className="text-base font-semibold leading-normal text-center text-warmgrey-900">It's just a little prick.</h2>
        </div>
      </body>
    </div>
  );
}
