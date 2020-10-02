import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function SignUp() {
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useForm();
  const [existingUserError, setExistingUserError] = useState('');
  const [miscError, setMiscError] = useState('');

  const onSubmit = (data) => {
    console.log('data ->', data);
    console.log('data.username ->', data.username);
    console.log('data.password ->', data.password);
    console.log('Submitting the form!');

    const apiServer = process.env.NODE_ENV === 'production' ? 'https://react-pinpoint-api.herokuapp.com' : 'http://localhost:5000';
    fetch(`${apiServer}/api/register`, {
      method: 'POST',
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
        console.log('data in result ->', data);
        if (data && data.err) {
          setExistingUserError(data.err);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 ">
      <Link href="/">
        <a className="mb-4">
          <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
        </a>
      </Link>
      <div className="w-full max-w-md p-12 bg-white rounded shadow-md text-neutral-1000">
        <h1 className="mb-8 text-xl font-light">Create your React Pinpoint account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-sm" noValidate>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              ref={register({
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email',
                },
              })}
              name="username"
              id="email"
              type="email"
              className="block w-full p-2 mt-2 border rounded border-grey-light"
            />
            <p className="text-xs text-red-600">{errors.username && errors.username.message}</p>
            <p className="text-xs text-red-600">{existingUserError}</p>
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
              className="block w-full p-2 mt-2 border rounded border-grey-light"
            />
            <p className="text-xs text-red-600">{errors.password && errors.password.message}</p>
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              ref={register({
                required: 'Password is required',
                validate: (value) => value === watch('password') || 'Passwords must match',
              })}
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              className="block w-full p-2 mt-2 border rounded border-grey-light"
            />
            <p className="text-xs text-red-600">{errors.confirmPassword && errors.confirmPassword.message}</p>
          </div>

          <button type="submit" className="w-full py-3 my-1 text-center text-white rounded bg-primary-1000 hover:bg-primary-900 focus:outline-none">
            Create Account
          </button>
          <p className="mt-2 text-red-600">{miscError}</p>
        </form>
      </div>
      <p className="mt-8 text-sm text-primary-1000">
        Have an account?{' '}
        <Link href="/login">
          <a className="font-medium text-primary-600 hover:text-primary-1000">Sign in</a>
        </Link>
      </p>
    </div>
  );
}
