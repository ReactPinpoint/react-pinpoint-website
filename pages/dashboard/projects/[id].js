import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Nav from '../../../components/nav';
const Tree = dynamic(() => import('../../../components/tree'), { ssr: false });

const Commit = ({ commit }) => {
  const { component_id, component_name, self_base_duration, parent_component_id, component_state, sibling_component_id } = commit;
  return (
    <div className="m-4 border-2">
      <p>Component id: {component_id}</p>
      <p>Component name: {component_name}</p>
      <p>Self base duration: {self_base_duration}</p>
      <p>Parent component id: {parent_component_id}</p>
      <p>Component state: {JSON.stringify(component_state)}</p>
      <p>Sibling component id: {sibling_component_id}</p>
      <p>Children ids: {JSON.stringify(children_ids)}</p>
    </div>
  );
};

const Change = ({ change }) => {
  const { change_id, commits } = change;
  const commitsList = commits.map((commit, i) => <Commit key={`Key${i}`} commit={commit} />);
  return (
    <div className="mt-8 mb-8 border-2">
      <h2>Change {change_id}</h2>
      {commitsList}
    </div>
  );
};

const myTreeData = [
  {
    name: 'root',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
    ],
  },
];

export default function Project() {
  const router = useRouter();
  const { id, name } = router.query;
  const [changes, setChanges] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const request = async () => {
      try {
        const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;
        const resp = await fetch(`${apiUrl}/api/commit/${id}`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await resp.json();
        console.log('data ->', data);
        if (data.length) {
          setLoaded(true);
          setChanges(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (id) request();
  }, [loaded, id]);
  const changesList = changes.map((change, i) => <Change key={`Change${i}`} change={change} />);
  return (
    <>
      <Nav loggedIn="true"></Nav>
      <div className="flex flex-col items-center">
        <h1 className="p-5 text-2xl">{name}</h1>
        <p>Your project id is: {id}. Pass this id to react pinpoint.</p>
        <div>{loaded && changesList}</div>
        <div className="w-screen h-screen bg-gray-500">
          <Tree treeData={myTreeData} />
        </div>
      </div>
    </>
  );
}
