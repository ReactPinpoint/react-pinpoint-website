import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Commit = ({ commit }) => {
  const { id } = commit;
  return(
    <div>
      <h2>Commit {id}</h2>
      <p></p>
    </div>
  )
}

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  const [commits, setCommits] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const request = async() => {
      try {
        const resp = await fetch(`https://react-pinpoint-api.herokuapp.com/api/commit/${id}`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await resp.json();
        if (data.length) {
          setLoaded(true);
          setCommits(data);
        }
      } catch(err) {
        console.log(err);
      }
    }
    if (id) request();
  }, [loaded, id])
  const commitsList = commits.map((commit, i) => <Commit key={`Commit${i}`} commit={commit} />)
  return(
    <div className="flex flex-col items-center">
      <h1>This is project {id}</h1>
      <div>
        {loaded && commitsList}
      </div>
    </div>
  );
}
