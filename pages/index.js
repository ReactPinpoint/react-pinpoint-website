import Head from 'next/head';
import Link from 'next/link';
import Container from '../components/container';

import { useState } from 'react';

console.log(`Currently in ${process.env.NODE_ENV} mode`);

export default function Home() {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Pinpoint</title>
      </Head>

      <main>
        <div className="relative overflow-hidden bg-gray-50">
          {/* Svg Pattern */}
          <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
            <div className="relative h-full max-w-screen-xl mx-auto">
              <svg
                className="absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-neutral-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
              </svg>
              <svg
                className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                width="404"
                height="784"
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern id="svg-pattern-squares-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-neutral-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#svg-pattern-squares-2)" />
              </svg>
            </div>
          </div>

          {/* Hamburger unexpanded */}
          <div x-data="{ open: false }" className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                      <a>
                        <svg
                          className="w-8 h-8 mr-2 fill-current text-primary-1000 hover:text-primary-800"
                          width="54"
                          height="54"
                          viewBox="0 0 54 54"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                        </svg>
                      </a>
                    </Link>

                    <Link href="/">
                      <a className="text-3xl font-semibold tracking-tight cursor-pointer text-primary-1000 hover:text-primary-800">React Pinpoint</a>
                    </Link>

                    <div className="flex items-center -mr-2 md:hidden">
                      <button
                        onClick={handleHamburger}
                        type="button"
                        className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-neutral-400 hover:text-gray-500 hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 focus:text-gray-500"
                      >
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                  <span className="inline-flex rounded-md shadow">
                    <Link href="/login">
                      <a className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-indigo-700">
                        Log in
                      </a>
                    </Link>
                  </span>
                </div>
              </nav>
            </div>

            {/* Hamburger Expanded */}
            <div x-show="open" style={{ display: !hamburger ? `none` : `block` }} className="absolute inset-x-0 top-0 p-2 md:hidden">
              <div className="transition origin-top-right transform rounded-lg shadow-md" x-show="open">
                <div className="overflow-hidden bg-white rounded-lg shadow-xs">
                  <div className="flex items-center justify-end px-5 pt-4">
                    <div className="-mr-2">
                      <button
                        onClick={handleHamburger}
                        type="button"
                        className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-neutral-400 hover:text-gray-500 hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 focus:text-gray-500"
                      >
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <Link href="/login">
                      <a className="block w-full px-5 py-3 font-medium text-center text-indigo-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-neutral-100 hover:text-indigo-700 focus:outline-none focus:bg-neutral-100 focus:text-indigo-700">
                        Log in
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-neutral-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Testing smarts for <br className="xl:hidden" />
                  <span className="text-indigo-600">React applications</span>
                </h2>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  React Pinpoint helps developers locate performance bottlenecks on their React components.
                </p>
                <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <Link href="/signup">
                      <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">
                        Get started
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        {/*   <div className="pb-6">
            <img className="object-scale-down w-full h-full max-w-lg max-h-lg sm:hidden" src="/hero-image.png" alt="React" />
          </div> */}

        <section className="flex flex-col items-center pt-8 mx-4 md:pl-64 md:pr-64 md:mx-auto bg-neutral-100">
          <h2 className="text-2xl text-primary-1000">Meet the team.</h2>
          <div className="flex flex-col xl:flex-row xl:justify-between xl:pt-4">
            <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg xl:mr-8">
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
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">
                  #photography
                </span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">#travel</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">#winter</span>
              </div>
            </div>
            <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg xl:mr-8">
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
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">
                  #photography
                </span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">#travel</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">#winter</span>
              </div>
            </div>
            <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg xl:mr-8">
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
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">
                  #photography
                </span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">#travel</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">#winter</span>
              </div>
            </div>
            <div className="max-w-sm mx-auto my-8 overflow-hidden bg-white rounded-lg shadow-lg">
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
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">
                  #photography
                </span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">#travel</span>
                <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full text-neutral-700 bg-neutral-200">#winter</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mt-8 text-2xl text-primary-1000">Want to contribute?</h2>
            <p className="mt-4 text-primary-600">React Pinpoint is open source.</p>
            <p className="text-primary-600">Help make React Pinpoint better!</p>
            <a href="https://github.com/oslabs-beta/react-pinpoint" target="_blank">
              <button className="flex px-4 py-2 my-8 font-semibold border rounded shadow border-neutral-400 focus:outline-none hover:bg-primary-400 bg-primary-500 text-neutral-100">
                GitHub{' '}
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    fill="#F0F4F8"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </section>
      </main>
    </Container>
  );
}
