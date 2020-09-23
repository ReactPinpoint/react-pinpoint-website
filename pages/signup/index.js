import Link from 'next/link';

function handleSubmit(e) {
  e.preventDefault();
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data && data.error) {
        setSignupError(data.message);
      }

      if (data && data.token) {
        //set cookie
        cookie.set('token', data.token, { expires: 2 });
        Router.push('/');
      }
    });
}

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-warmgrey-100 ">
      <Link href="/">
        <a className="mb-4">React Pinpoint Logo Goes Here</a>
      </Link>
      <div className="w-full max-w-sm px-8 py-8 text-black bg-white rounded shadow-md">
        <h1 className="text-lg font-medium text-center">Create your React Pinpoint account</h1>
        <form className="flex flex-col">
          <label htmlFor="email" className="mt-6">
            Email
          </label>
          <input id="email" type="email" className="block w-full p-2 mb-4 border rounded border-grey-light" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="block w-full p-2 mb-4 border rounded border-grey-light" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" className="block w-full p-2 mb-4 border rounded border-grey-light" />
          <button type="submit" className="w-full py-3 my-1 text-center text-white bg-purple-400 rounded hover:bg-purple-300 focus:outline-none">
            Create Account
          </button>
        </form>
      </div>
      <p className="mt-4">
        Already have an account?{' '}
        <Link href="/login">
          <a className="text-blue-500 underline">Log in.</a>
        </Link>
      </p>
    </div>
  );
}
