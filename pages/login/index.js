import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Logo from '../../components/logo';

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [passwordError, setPasswordError] = useState('');
  const [miscError, setMiscError] = useState('');
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;
      const resp = await fetch(`${apiUrl}/api/login`, {
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
        setPasswordError('The email or password you entered is invalid.');
      }
    } catch (err) {
      setMiscError(err.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100">
      <Link href="/">
        <a className="mb-4">
          <Logo />
        </a>
      </Link>
      <div className="w-full max-w-md p-12 bg-white rounded shadow-md text-neutral-1000">
        <h1 className="flex flex-row mb-4 text-xl font-light text-center">Sign in to your account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-sm" noValidate>
          <div className="mt-2 mb-4">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              ref={register({
                required: 'Email is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email.',
                },
              })}
              name="username"
              id="email"
              type="email"
              className="block w-full p-2 mt-2 border rounded border-grey-light"
            />
            <p className="text-xs text-red-600">{errors.username && errors.username.message}</p>
          </div>

          <div className="mt-4 mb-8">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              ref={register({
                required: 'Password is required.',
              })}
              name="password"
              id="password"
              type="password"
              className="block w-full p-2 mt-2 border rounded border-grey-light"
            />
            <p className="text-xs text-red-600 ">{errors.password && errors.password.message}</p>
            <p className="text-xs text-red-600">{passwordError}</p>
          </div>
          <button
            type="submit"
            className="w-full py-3 my-1 text-center text-white bg-indigo-600 rounded hover:bg-indigo-500 focus:border-indigo-700 active:bg-indigo-700 focus:outline-none"
          >
            Continue
          </button>
          <p className="mt-2 text-xs text-red-600">{miscError}</p>
        </form>
      </div>
      <p className="mt-8 text-sm text-primary-1000">
        Don't have an account?{' '}
        <Link href="/signup">
          <a className="font-medium text-indigo-600 hover:text-primary-1000">Sign Up</a>
        </Link>
      </p>
    </div>
  );
}
