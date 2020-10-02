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

        <section className="flex flex-col px-10 md:pl-64 justify-evenly bg-primary-100">
          <div className="max-w-xs md:pt-24">
            <h1 className="text-4xl font-semibold leading-tight text-primary-1000">Testing smarts for React applications</h1>
            <h2 className="pt-8 text-lg leading-normal md:pt-4 md:text-base text-primary-600">
              React Pinpoint helps developers locate performance bottlenecks on their React components.
            </h2>
            <div className="mt-6 mb-6">
              <Link href="/signup">
                <a>
                  <Button>Get Started </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className="pb-6">
            <img className="object-scale-down w-full h-full max-w-lg max-h-lg sm:hidden" src="/hero-image.png" alt="React" />
          </div>
        </section>

        <section className="flex flex-col items-center pt-8 bg-neutral-100">
          <h2 className="text-2xl text-primary-1000">Meet the team.</h2>
          <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4">
              <div className="my-2 text-xl font-bold">Tai Nguyen</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
            </div>
          </div>
          <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4">
              <div className="my-2 text-xl font-bold">Jeffrey C. Lu</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
            </div>
          </div>
          <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4">
              <div className="my-2 text-xl font-bold">Matthew Batelic</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
            </div>
          </div>
          <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4">
              <div className="my-2 text-xl font-bold">Robert Luo</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
