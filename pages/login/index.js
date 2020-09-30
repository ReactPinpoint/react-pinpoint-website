import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [passwordError, setPasswordError] = useState('');
  const [miscError, setMiscError] = useState('');
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const resp = await fetch('https://api.reactpp.com/api/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });
      const result = await resp.json();
      if (result.loggedIn) {
        router.push('/dashboard');
      } else {
        setPasswordError('The email or password you entered is invalid');
      }
    } catch (err) {
      setMiscError(err.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-warmgrey-100 ">
      <Link href="/">
        <a className="mb-4">React Pinpoint Logo Goes Here</a>
      </Link>
      <div className="w-full max-w-sm px-8 py-8 text-black bg-white rounded shadow-md">
        <h1 className="flex flex-row text-lg text-center">Sign in to your account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" noValidate>
          <div className="mt-2 mb-4">
            <label htmlFor="email">Email</label>
            <input
              ref={register({
                required: 'Email is required',
              })}
              name="username"
              id="email"
              type="email"
              className="block w-full p-2 border rounded border-grey-light"
            />
            <p className="text-red-600">{errors.username && errors.username.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              ref={register({
                required: 'Password is required',
              })}
              name="password"
              id="password"
              type="password"
              className="block w-full p-2 border rounded border-grey-light"
            />
            <p className="text-red-600">{errors.password && errors.password.message}</p>
            <p className="text-red-600">{passwordError}</p>
          </div>
          <button type="submit" className="w-full py-3 my-1 text-center text-white bg-purple-400 rounded hover:bg-purple-300 focus:outline-none">
            Continue
          </button>
          <p className="mt-2 text-red-600">{miscError}</p>
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
