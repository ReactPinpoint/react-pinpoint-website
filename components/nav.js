import { Router, useRouter } from 'next/router';
import Link from 'next/link';

export default function Nav({ ...props }) {
  const router = useRouter();
  const { loggedIn } = props || false;
  const handleLogout = async () => {
    try {
      const apiServer = process.env.NODE_ENV === 'production' ? 'https://react-pinpoint-api.herokuapp.com' : 'http://localhost:5000';
      const resp = await fetch(`${apiServer}/api/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await resp.json();
      // console.log(data)
      if (data.loggedOut) router.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="flex flex-wrap items-center justify-between px-64 py-6 bg-primary-100">
      <div className="flex items-center flex-shrink-0 mr-6 text-neutral-1000">
        <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <Link href={loggedIn ? '/dashboard' : '/'}>
          <a className="text-xl font-semibold tracking-tight cursor-pointer">React Pinpoint</a>
        </Link>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 mr-4 text-primary-600 lg:inline-block lg:mt-0 hover:text-primary-500">
            Robbie
          </a>
          <a href="#responsive-header" className="block mt-4 mr-4 text-primary-600 lg:inline-block lg:mt-0 hover:text-primary-500">
            Jeffie
          </a>
          <a href="#responsive-header" className="block mt-4 text-primary-600 lg:inline-block lg:mt-0 hover:text-primary-500">
            Taie
          </a>
        </div>
        {loggedIn && (
          <div>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 text-sm leading-none border rounded text-neutral-100 border-neutral-100 hover:border-transparent hover:text-primary-500 hover:bg-neutral-100 lg:mt-0"
              onClick={handleLogout}
            >
              Sign out
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
