import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Layout from '../../components/layout';
import Logo from '../../components/logo';

export default function SignUp() {
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useForm();
  const [existingUserError, setExistingUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [miscError, setMiscError] = useState('');

  const clearUsernameError = () => {
    if (existingUserError.length) setExistingUserError('');
    if (miscError.length) setMiscError('');
  };

  const clearPasswordError = (e) => {
    if (passwordError.length && e.target.value.length >= 8) setPasswordError('');
    if (miscError.length) setMiscError('');
  };

  const onSubmit = (data) => {
    const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;
    fetch(`${apiUrl}/api/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.error) {
          if (data.error.startsWith('The password')) {
            setPasswordError(data.error);
          } else {
            setExistingUserError(data.error);
          }
        } else if (data) {
          // Redirect user to dashboard
          router.push('/dashboard');
        }
      })
      .catch((err) => {
        setMiscError(err.message);
      });
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 ">
        <Link href="/">
          <a aria-label="React Pinpoint" className="mb-4">
            <Logo />
          </a>
        </Link>
        <div className="w-full max-w-md p-12 bg-white rounded shadow-md text-neutral-1000">
          <h1 className="mb-8 text-xl font-light">Create your React Pinpoint account</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-sm" noValidate>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
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
                onChange={() => clearUsernameError()}
              />
              <p className="text-xs text-red-600">{errors.username && errors.username.message}</p>
              <p className="text-xs text-red-600">{existingUserError}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                ref={register({
                  required: 'Password is required.',
                })}
                name="password"
                id="password"
                type="password"
                className="block w-full p-2 mt-2 border rounded border-grey-light"
                onChange={(e) => clearPasswordError(e)}
              />
              <p className="text-xs text-red-600">{errors.password && errors.password.message}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                ref={register({
                  required: 'Password is required.',
                  validate: (value) => value === watch('password') || 'Passwords must match.',
                })}
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                className="block w-full p-2 mt-2 border rounded border-grey-light"
                onChange={(e) => clearPasswordError(e)}
              />
              <p className="text-xs text-red-600">{errors.confirmPassword && errors.confirmPassword.message}</p>
              <p className="text-xs text-red-600">{passwordError}</p>
            </div>

            <button
              type="submit"
              className="w-full py-3 my-1 text-center text-white bg-indigo-600 rounded hover:bg-indigo-500 focus:border-indigo-700 active:bg-indigo-700 focus:outline-none"
            >
              Create Account
            </button>
            <p className="mt-2 text-red-600">{miscError}</p>
          </form>
        </div>
        <p className="mt-8 text-sm text-primary-1000">
          Have an account?{' '}
          <Link href="/login">
            <a className="font-medium text-indigo-600 hover:text-primary-1000">Sign in</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
