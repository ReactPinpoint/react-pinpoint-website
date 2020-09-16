import Head from 'next/head';
import Nav from './Nav';

export default function Home(props) {
  return (
    <div>
      <Nav></Nav>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Pinpoint</title>
      </Head>
      <body>
        <div className="p-4 bg-white rounded shadow">
          <h1 className="text-6xl font-semibold leading-normal text-center text-purple-500">React Pinpoint</h1>
          <p className="text-center text-gray-600">with Tailwind CSS</p>
          <p className="text-center text-gray-600">LETS GOOOOOO</p>
        </div>
      </body>
    </div>
  );
}
