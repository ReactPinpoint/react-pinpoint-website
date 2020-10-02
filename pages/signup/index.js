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

    const apiServer = process.env.NODE_ENV === 'production' ? "https://react-pinpoint-api.herokuapp.com" : "http://localhost:5000";
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
        <a className="mb-4">React Pinpoint Logo Goes </a>
      </Link>
      <div className="w-full max-w-sm px-8 py-8 text-black bg-white rounded shadow-md">
        <h1 className="mb-4 text-lg font-medium text-center">Create your React Pinpoint account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" noValidate>
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
              className="block w-full p-2 mt-1 border rounded border-grey-light"
            />
            <p className="text-red-600">{errors.username && errors.username.message}</p>
            <p className="text-red-600">{existingUserError}</p>
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
              className="block w-full p-2 mt-1 border rounded border-grey-light"
            />
            <p className="text-red-600">{errors.password && errors.password.message}</p>
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
              className="block w-full p-2 mt-1 border rounded border-grey-light"
            />
            <p className="text-red-600">{errors.confirmPassword && errors.confirmPassword.message}</p>
          </div>

          <button type="submit" className="w-full py-3 my-1 text-center text-white bg-primary-1000 rounded hover:bg-primary-900 focus:outline-none">
            Create Account
          </button>
          <p className="mt-2 text-red-600">{miscError}</p>
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
