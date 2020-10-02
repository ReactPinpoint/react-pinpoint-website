import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function Add() {
  const { register, handleSubmit, watch, errors } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const apiServer = process.env.NODE_ENV === 'production' ? 'https://react-pinpoint-api.herokuapp.com' : 'http://localhost:5000';
      const resp = await fetch(`${apiServer}/api/project`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          description: data.description,
        }),
      });
      const result = await resp.json();
      if (result.project_id) router.push(`/dashboard/projects/${result.project_id}`);
    } catch (err) {
      console.log('error -> ', err.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 ">
      <Link href="/">
        <a className="mb-4">React Pinpoint Logo Goes Here</a>
      </Link>
      <div className="w-full max-w-sm px-8 py-8 text-black bg-white rounded shadow-md">
        <h1 className="flex flex-row text-lg text-center">Create a new Project</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" noValidate>
          <label htmlFor="name" className="mt-6">
            Name
          </label>
          <input
            ref={register({
              required: 'Name is required',
            })}
            name="name"
            id="name"
            type="text"
            className="block w-full p-2 mb-4 border rounded border-grey-light"
          />
          <label htmlFor="description">Description</label>
          <input
            ref={register({
              required: 'Description is required',
            })}
            name="description"
            id="description"
            type="text"
            className="block w-full p-2 mb-4 border rounded border-grey-light"
          />
          <button type="submit" className="w-full py-3 my-1 text-center text-white bg-purple-400 rounded hover:bg-purple-300 focus:outline-none">
            Create Project
          </button>
        </form>
      </div>
      <p className="mt-4">
        <Link href="/dashboard">
          <a className="text-blue-500 underline">Go Back</a>
        </Link>
      </p>
    </div>
  );
}
