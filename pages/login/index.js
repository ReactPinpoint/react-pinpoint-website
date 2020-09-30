import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const resp = await fetch('https://react-pinpoint-api.herokuapp.com/api/login', {
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
      console.log(result)
      if (result.loggedIn) router.push('/dashboard');
    } catch(err) {
      console.log('error -> ', err.message);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-warmgrey-100 ">
      <Link href="/">
        <a className="mb-4">React Pinpoint Logo Goes Here</a>
      </Link>
      <div className="w-full max-w-sm px-8 py-8 text-black bg-white rounded shadow-md">
        <h1 className="flex flex-row text-lg text-center">Sign in to your account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" noValidate>
          <label htmlFor="email" className="mt-6">
            Email
          </label>
          <input 
            ref={register({
              required: 'Email is required',
            })}
            name="username"
            id="email"
            type="email"
            className="block w-full p-2 mb-4 border rounded border-grey-light" />
          <label htmlFor="password">Password</label>
          <input 
            ref={register({
              required: 'Email is required',
            })}
            name="password"
            id="password" 
            type="password" 
            className="block w-full p-2 mb-4 border rounded border-grey-light" />
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
