import Head from 'next/head';

export default function Home(props) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Pinpoint</title>
      </Head>
      <body>
        <div className="p-4 rounded shadow bg-white">
          <h1 className="text-large text-purple-500 leading-normal">Next.js</h1>
          <p className="text-gray-500">with Tailwind CSS</p>
          <p className="text-gray-500">LETS GOOOOOO</p>
        </div>
      </body>
    </div>
  );
}
