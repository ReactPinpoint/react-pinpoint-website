import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function SignUp() {
  const { register, handleSubmit, watch, errors } = useForm();
  const { exists, }
  const router = useRouter();

  const onSubmit = (data) => {
    console.log('data ->', data);
    console.log('data.username ->', data.username);
    console.log('data.password ->', data.password);
    console.log('Submitting the form!');

    fetch('http://api.reactpp.com/api/register', {
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
        if (data && data.error) {
          console.log(data.message);
        }

        if (data) {
          // Redirect user back to home
          router.push('/');
        }
      })
      .catch((err) => {
        console.log('error -> ', err.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-warmgrey-100 ">
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
