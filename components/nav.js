/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './logo';

export default function Nav({ ...props }) {
  const router = useRouter();
  const { loggedIn } = props || false;
  const handleLogout = async () => {
    try {
      const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;
      const resp = await fetch(`${apiUrl}/api/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await resp.json();
      if (data.loggedOut) {
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav
      className={
        loggedIn
          ? 'flex flex-col items-center justify-between py-4 md:pl-8 md:pr-64 lg:flex-row bg-white'
          : 'flex flex-col items-center justify-between py-4 md:px-64 lg:flex-row bg-primary-100'
      }
    >
      <div className="flex items-center flex-shrink-0 mr-6 text-neutral-1000">
        <Link href={loggedIn ? '/dashboard' : '/'}>
          <a aria-label="React Pinpoint">
            <Logo />
          </a>
        </Link>

        <Link href={loggedIn ? '/dashboard' : '/'}>
          <a
            className="text-4xl font-semibold tracking-tight text-indigo-600 cursor-pointer hover:text-indigo-500 md:text-2xl"
            aria-label="React Pinpoint"
          >
            React Pinpoint
          </a>
        </Link>
      </div>

      {!loggedIn && (
        <Link href="/login">
          <a
            href="#"
            className="inline-block w-2/4 max-w-md px-4 py-4 mt-4 text-sm leading-none text-center border rounded lg:py-2 lg:rounded-full lg:w-auto lg:mr-24 text-neutral-100 bg-primary-600 border-primary-600 hover:border-transparent hover:text-neutral-100 hover:bg-primary-500 lg:mt-0"
          >
            Sign in
          </a>
        </Link>
      )}

      {loggedIn && (
        <div>
          <a
            className="inline-block text-sm font-medium text-indigo-600 cursor-pointer hover:border-transparent hover:text-neutral-1000 lg:mt-0"
            onClick={handleLogout}
          >
            Sign out
          </a>
        </div>
      )}
    </nav>
  );
}
