import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import isAuthorized from '../../../utils/is-authorized';

export default function Add() {
  const { register, handleSubmit, watch, errors } = useForm();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const authorized = await isAuthorized();
      if (!authorized.success) {
        router.push('/login');
      }
    })();
  });

  const onSubmit = async (data) => {
    try {
      const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;
      const resp = await fetch(`${apiUrl}/api/project`, {
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
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-md p-8 mx-auto my-0 sm:p-32" noValidate>
      <div>
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Add Project</h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">Enter the name and description of the project you are adding.</p>
          </div>

          <div className="pt-2 mt-2 border-t border-gray-200">
            <div className="grid grid-cols-1 row-gap-6 col-gap-4 mt-6 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                  Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    ref={register({
                      required: 'Name is required.',
                    })}
                    id="name"
                    name="name"
                    className="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5"
                  />
                </div>
                <p className="text-xs text-red-600">{errors.name && errors.name.message}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 row-gap-6 col-gap-4 mt-6 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="description" className="block text-sm font-medium leading-5 text-gray-700">
                Description
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <textarea
                  ref={register({
                    required: 'Description is required.',
                  })}
                  name="description"
                  id="description"
                  rows="3"
                  className="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                ></textarea>
                <p className="text-xs text-red-600">{errors.description && errors.description.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-8 border-t border-gray-200">
        <div className="flex justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            <Link href="/dashboard">
              <a className="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                Cancel
              </a>
            </Link>
          </span>
          <span className="inline-flex ml-3 rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}
