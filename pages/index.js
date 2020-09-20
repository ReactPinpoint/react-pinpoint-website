import Head from 'next/head';
import Nav from '../components/nav';
import Container from '../components/container';
import Button from '../components/button';

export default function Home() {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Pinpoint</title>
      </Head>
      <div className="rounded-lg">
        <Nav></Nav>
        <div className="px-40 pt-16 pb-8 bg-purple-300">
          <div className="max-w-xs">
            <h1 className="text-4xl font-semibold leading-tight text-warmgrey-100">Testing smarts for React applications</h1>
            <h2 className="pt-4 text-base leading-normal text-warmgrey-100">
              React Pinpoint helps developers locate performance bottlenecks on their React components.
            </h2>
            <div className="mt-6">
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-warmgrey-200">
          <h1 className="text-2xl font-semibold">Airedale cheeseburger fromage frais</h1>
        </div>
        <div className="p-4 bg-warmgrey-100">
          <h2 className="text-2xl font-semibold leading-normal text-right text-warmgrey-900">Airedale cheeseburger fromage frais</h2>
        </div>
        <div className="p-4 bg-warmgrey-200">
          <h1 className="text-2xl font-semibold">Airedale cheeseburger fromage frais</h1>
        </div>
        <div className="p-4 bg-warmgrey-100">
          <h2 className="text-2xl font-semibold leading-normal text-right text-warmgrey-900">Airedale cheeseburger fromage frais</h2>
        </div>
      </div>
    </Container>
  );
}
