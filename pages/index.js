import Head from 'next/head';
import Link from 'next/link';
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
      <div>
        <Nav></Nav>

        <div className="flex py-16 justify-evenly bg-primary-100">
          <div className="max-w-xs pt-24">
            <h1 className="text-4xl font-semibold leading-tight text-primary-1000">Testing smarts for React applications</h1>
            <h2 className="pt-4 text-base leading-normal text-primary-600">
              React Pinpoint helps developers locate performance bottlenecks on their React components.
            </h2>
            <div className="mt-6">
              <Link href="/signup">
                <a>
                  <Button>Get Started </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className="">
            <img className="object-scale-down w-full h-full max-w-lg max-h-lg sm:hidden" src="/hero-image.png" alt="React" />
          </div>
        </div>
      </div>
    </Container>
  );
}
