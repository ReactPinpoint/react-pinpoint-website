import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Commit = ({ commit }) => {
  const { 
    component_id, 
    component_name, 
    self_base_duration, 
    parent_component_id, 
    component_state, 
    sibling_component_id } = commit;
  return(
    <div className="border-2 m-4">
      <p>Component id: {component_id}</p>
      <p>Component name: {component_name}</p>
      <p>Self base duration: {self_base_duration}</p>
      <p>Parent component id: {parent_component_id}</p>
      <p>Component state: {component_state}</p>
      <p>Sibling component id: {sibling_component_id}</p>
    </div>
  )
}

const Change = ({ change }) => {
  const { change_id, commits } = change;
  const commitsList = commits.map((commit, i) => <Commit key={`Key${i}`} commit={commit} />)
  return(
    <div className="border-2 mt-8 mb-8">
      <h2>Change {change_id}</h2>
      {commitsList}
    </div>
  )
}

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  const [changes, setChanges] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const request = async() => {
      try {
        const apiServer = process.env.NODE_ENV === 'production' ? "https://react-pinpoint-api.herokuapp.com" : "http://localhost:5000";
        const resp = await fetch(`${apiServer}/api/commit/${id}`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await resp.json();
        // console.log('data ->', data)
        if (data.length) {
          setLoaded(true);
          setChanges(data);
        }
      } catch(err) {
        console.log(err);
      }
    }
    if (id) request();
  }, [loaded, id])
  const changesList = changes.map((change, i) => <Change key={`Change${i}`} change={change} />)
  return(
    <div className="flex flex-col items-center">
      <h1>This is project {id}</h1>
      <div>
        {loaded && changesList}
      </div>
    </div>
  );
}
