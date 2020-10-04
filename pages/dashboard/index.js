import Link from 'next/link';
import { useRouter } from 'next/router';
import cookies from 'next-cookies';
import { useState, useEffect } from 'react';

import Nav from '../../components/nav';

const Project = ({ project, token }) => {
  const router = useRouter();
  const { name, description, project_id } = project;

  const onViewProject = () => {
    router.push({ pathname: `/dashboard/projects/${project_id}?name=${name}` });
  };

  return (
    <li className="border-t border-neutral-200">
      <a
        onClick={onViewProject}
        className="block transition duration-150 ease-in-out cursor-pointer hover:bg-teal-200 focus:outline-none focus:bg-gray-50"
      >
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium leading-5 text-indigo-600 truncate">{name}</div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <div className="flex items-center mr-6 text-sm leading-5 text-gray-500">{description}</div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default function Dashboard({ token }) {
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const onAddProject = () => {
    router.push({ pathname: `/dashboard/add`, query: { token } });
  };

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }

    (async () => {
      try {
        const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;
        const resp = await fetch(`${apiUrl}/api/project`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await resp.json();
        if (data.length) {
          setLoaded(true);
          setProjects(data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [loaded]);

  const projectsList = projects.map((project, i) => <Project token={token} key={`project${i}`} project={project} />);
  return (
    <>
      <Nav loggedIn={true}></Nav>
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold leading-tight text-neutral-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-2 rounded-lg border-neutral-200 ">
              <div className="px-4 py-5 bg-white border-b border-neutral-200 sm:px-6">
                <div className="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-no-wrap">
                  <div className="mt-4 ml-4">
                    <h3 className="text-lg font-medium leading-6 text-neutral-900">Projects</h3>
                    <p className="mt-1 text-sm leading-5 text-neutral-500">Here are your current list of projects.</p>
                    <p className="mt-1 text-sm leading-5 text-neutral-500">Click on the project to view details.</p>
                  </div>
                  <div className="flex-shrink-0 mt-4 ml-4">
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        onClick={onAddProject}
                        type="button"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
                      >
                        Add Project
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden bg-white shadow sm:rounded-md">
                <ul>{loaded && projectsList}</ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // Read the cookie
  const { token } = cookies(ctx);

  return {
    props: { token: token || null }, // Will be passed to the page component as props
  };
}
