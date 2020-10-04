import Link from 'next/link';
import { useRouter } from 'next/router';
import cookies from 'next-cookies';
import { useState, useEffect } from 'react';

import Nav from '../../components/nav';

const Project = ({ project }) => {
  const { name, description, project_id } = project;
  return (
    <div className="flex flex-col items-start justify-start py-4">
      <h3 className="py-3 text-xl">{name}</h3>
      <p>{description}</p>
      <Link href={`/dashboard/projects/${project_id}?name=${name}`}>
        <a className="text-blue-500 underline">View Project</a>
      </Link>
    </div>
  );
};

export default function Dashboard({ token }) {
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  const projectsList = projects.map((project, i) => <Project key={`project${i}`} project={project} />);
  return (
    <>
      <Nav loggedIn="true"></Nav>
      <div className="flex flex-col items-center">
        <h2 className="p-5 text-2xl">Dashboard</h2>
        <div className="flex flex-col items-start">
          {loaded && projectsList}
          <div className="py-10">
            <Link href="/dashboard/add">
              <a className="text-blue-500 underline">Add a Project</a>
            </Link>
          </div>
        </div>
      </div>
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
