import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
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
      <div>
        <Nav></Nav>
        <div className="py-16 pl-64 bg-purple-300">
          <div className="max-w-xs">
            <h1 className="text-4xl font-semibold leading-tight text-warmgrey-100">Testing smarts for React applications</h1>
            <h2 className="pt-4 text-base leading-normal text-warmgrey-100">
              React Pinpoint helps developers locate performance bottlenecks on their React components.
            </h2>
            <div className="mt-6">
              <Link href="/signup">
                <a>
                  <Button>Get Started </Button>
                </a>
              </Link>
            </div>
            <div className="mt-6">
              <Link href="/dashboard">
                <a>
                  <Button>To the Dashboard </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-64 py-6 bg-warmgrey-100">
          <h1 className="text-2xl font-semibold">A fully integrated suite of performance metrics</h1>
        </div>
        <div className="px-64 py-6 bg-warmgrey-200">
          <h2 className="text-2xl font-semibold leading-normal text-right text-warmgrey-900">Airedale cheeseburger fromage frais</h2>
        </div>
        <div className="px-64 py-6 bg-warmgrey-100">
          <h1 className="text-2xl font-semibold">Airedale cheeseburger fromage frais</h1>
        </div>
        <div className="px-64 py-6 bg-warmgrey-200">
          <h2 className="text-2xl font-semibold leading-normal text-right text-warmgrey-900">Airedale cheeseburger fromage frais</h2>
        </div>
        <div className="px-64 py-6 bg-warmgrey-100">
          <h1 className="text-2xl font-semibold">A fully integrated suite of performance metrics</h1>
        </div>
        <div className="px-64 py-6 bg-warmgrey-200">
          <h2 className="text-2xl font-semibold leading-normal text-right text-warmgrey-900">Airedale cheeseburger fromage frais</h2>
        </div>
      </div>
    </Container>
  );
}
