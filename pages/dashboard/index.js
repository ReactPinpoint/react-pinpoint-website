import Link from 'next/link';
import { useState, useEffect } from 'react';

const Project = ({ project }) => {
  const { name, description, project_id } = project;
  return (
    <div className="flex flex-col justify-start items-start">
      <h3>{name}</h3>
      <p>{description}</p>
      <Link href={`/dashboard/projects/${project_id}`}>
          <a className="text-blue-500 underline">View Project</a>
      </Link>
    </div>
  )
};

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch('https://react-pinpoint-api.herokuapp.com/api/project', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await resp.json();
        console.log(data)
        if (data.length) {
          setLoaded(true);
          setProjects(data);
        }
      } catch (err) {
        console.log(err);
      }
    })();

    // const fakeData = [
    //   {
    //       "project_id": "98bbdaa2-ef18-4018-95d7-7f7f5b72767b",
    //       "name": "project 1",
    //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum.",
    //   },
    //   {
    //       "project_id": "315d305d-2cd7-42f0-96df-2763e767e8c3",
    //       "name": "project 2",
    //       "description": "Suspendisse lacinia quam vel nibh venenatis, et venenatis lacus accumsan.",
    //   },
    //   {
    //     "project_id": "315d305d-2cd7-42f0-96df-2763e767e8c3",
    //     "name": "project 3",
    //     "description": "Donec eget malesuada odio. Cras neque lacus, commodo sed finibus.",
    //   }
    // ]
    // setProjects(fakeData);
    // setLoaded(true);
  }, [loaded]);

  const projectsList = projects.map((project, i) => <Project key={`project${i}`} project={project} />)
  return (
    <div className="flex flex-col items-center">
      <h1>Welcome! Person</h1>
      <h2>Dashboard</h2>
      <div className="flex flex-col items-start">
        {loaded && projectsList}
        <Link href="/project/add">
          <a className="text-blue-500 underline">Add a Project</a>
        </Link>
      </div>
    </div>
  );
}
