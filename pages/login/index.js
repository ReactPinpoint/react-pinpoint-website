import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-warmgrey-100 ">
      <Link href="/">
        <a className="mb-4">React Pinpoint Logo Goes Here</a>
      </Link>
      <div className="w-full max-w-sm px-8 py-8 text-black bg-white rounded shadow-md">
        <h1 className="flex flex-row text-lg text-center">Sign in to your account</h1>
        <form className="flex flex-col">
          <label htmlFor="email" className="mt-6">
            Email
          </label>
          <input id="email" type="email" className="block w-full p-2 mb-4 border rounded border-grey-light" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="block w-full p-2 mb-4 border rounded border-grey-light" />
          <button type="submit" className="w-full py-3 my-1 text-center text-white bg-purple-400 rounded hover:bg-purple-300 focus:outline-none">
            Continue
          </button>
        </form>
      </div>
      <p className="mt-4">
        Don't have an account?{' '}
        <Link href="/signup">
          <a className="text-blue-500 underline">Sign Up</a>
        </Link>
      </p>
    </div>
  );
}
