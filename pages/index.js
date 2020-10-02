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

        <section className="flex flex-col items-center pt-8 mx-4 bg-neutral-100">
          <h2 className="text-2xl text-primary-1000">Meet the team.</h2>
          <div className="flex flex-col xl:flex-row xl:justify-evenly xl:pt-12">
            <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg xl:mx-8">
              <div className="flex flex-col items-center px-6 py-4">
                <div className="my-2 text-xl font-bold text-primary-1000">Tai Nguyen</div>
                <a href="https://github.com/ndhuutai" target="_blank">
                  <svg height="24" width="24" className="cursor-pointer " role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
              </div>
            </div>
            <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg xl:mx-8">
              <div className="flex flex-col items-center px-6 py-4">
                <div className="my-2 text-xl font-bold text-primary-1000">Jeffrey C. Lu</div>
                <a href="https://github.com/jeffreyclu" target="_blank">
                  <svg height="24" width="24" className="cursor-pointer " role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
              </div>
            </div>
            <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg xl:mx-8">
              <div className="flex flex-col items-center px-6 py-4">
                <div className="my-2 text-xl font-bold text-primary-1000">Matthew Batelic</div>
                <a href="https://github.com/batelicm" target="_blank">
                  <svg height="24" width="24" className="cursor-pointer " role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
              </div>
            </div>
            <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg xl:mx-8">
              <div className="flex flex-col items-center px-6 py-4">
                <div className="my-2 text-xl font-bold text-primary-1000">Robert Luo</div>
                <a href="https://github.com/robertxluo" target="_blank">
                  <svg height="24" width="24" className="cursor-pointer " role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
