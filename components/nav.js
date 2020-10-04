import { Router, useRouter } from 'next/router';
import Link from 'next/link';

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
    <nav className="flex flex-col items-center justify-between py-4 md:px-64 lg:flex-row bg-primary-100">
      <div className="flex items-center flex-shrink-0 mr-6 text-neutral-1000">
        <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <Link href={loggedIn ? '/dashboard' : '/'}>
          <a className="text-4xl font-semibold tracking-tight cursor-pointer md:text-2xl">React Pinpoint</a>
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
            href="#"
            className="inline-block text-sm font-medium text-primary-600 hover:border-transparent hover:text-neutral-1000 lg:mt-0"
            onClick={handleLogout}
          >
            Sign out
          </a>
        </div>
      )}
    </nav>
  );
}
