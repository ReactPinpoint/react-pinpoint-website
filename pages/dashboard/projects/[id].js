import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import isAuthorized from '../../../utils/is-authorized';

import Nav from '../../../components/nav';
import Breadcrumbs from '../../../components/breadcrumbs';
import Layout from '../../../components/layout';
const Tree = dynamic(() => import('../../../components/tree'), { ssr: false });
const TreeMenu = dynamic(() => import('../../../components/treemenu'), { ssr: false });

export default function Project() {
  const router = useRouter();
  const { id, name } = router.query;
  const [authorized, setAuthorized] = useState(false);
  const [changes, setChanges] = useState([]);
  const [treeData, setTreeData] = useState([{}]);
  const [dataLength, setDataLength] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [changeIndex, setChangeIndex] = useState(0);

  const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;

  useEffect(() => {
    (async () => {
      const authorized = await isAuthorized();
      if (!authorized.success) {
        setAuthorized(false);
        router.push('/login');
      } else {
        setAuthorized(true);
      }
    })();

    const request = async () => {
      try {
        const resp = await fetch(`${apiUrl}/api/commit/${id}`, {
          method: 'GET',
          credentials: 'include',
        });

        const data = await resp.json();

        if (data.length) {
          setLoaded(true);
          setDataLength(data.length);
          setChanges(data);
        } else {
          setLoaded(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (id) request();
  }, [loaded, id]);

  useEffect(() => {
    if (!changes.length) return;
    // example, getting the first change
    // i put them in a map so that later on i can
    // reference it to populate each child_id with actual object.
    const componentMap = new Map();
    changes[changeIndex].commits.forEach((item) =>
      componentMap.set(item.component_id, {
        ...item,
        name: item.component_name, // name could be anything to display on d3
      })
    );
    // picking just the first change and the first commit to start
    // the first commit has the root so i'm using it here
    // to start with recursive calls.
    const result = changes[changeIndex].commits[0];
    result.name = 'root';
    function populateChild(arr) {
      const resultArr = [];
      for (let i = 0; i < arr.length; i++) {
        const component = componentMap.get(arr[i]);
        if (component.children_ids.length > 0) {
          component.children = populateChild(component.children_ids);
        }
        // compState is used to populate the attributes of the node on the tree
        let compState = {};
        if (component.component_state) {
          for (let key in component.component_state) {
            compState[key] = `${component.component_state[key]}`;
          }
        } else {
          compState = null;
        }
        component.attributes = compState;
        component.attributes = { ...component.attributes, time: component.self_base_duration.toFixed(2) };
        component.nodeSvgShape = {
          shape: 'circle',
          shapeProps: {
            r: 10,
            fill: `hsl(${(1.0 - Math.min(1.0, component.self_base_duration)) * 240}, 100%, 50%)`,
          },
        };
        resultArr.push(component);
      }
      return resultArr;
    }
    if (result.children_ids.length > 0) {
      result.children = populateChild(result.children_ids);
    }
    setTreeData([result]);
  }, [changes, changeIndex]);

  const treeDisplay = (
    <>
      <Link href={`${apiUrl}/api/commit/${id}`}>
        <a
          type="button"
          className="flex items-center self-center px-2 py-3 mt-4 mr-4 text-sm font-medium leading-6 text-transparent transition duration-150 ease-in-out bg-white border-2 rounded-md border-neutral-500 text-neutral-700 hover:text-neutral-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-neutral-800 active:bg-neutral-100"
        >
          View project data in JSON format
        </a>
      </Link>
      <div className="flex flex-row w-3/4 h-screen mx-auto my-4 bg-white border-4 rounded-lg border-neutral-700">
        <TreeMenu changes={changes} setChangeIndex={setChangeIndex} />
        <Tree treeData={treeData} />
      </div>
    </>
  );

  const stepsDisplay = (
    <div>
      <ul className="max-w-lg overflow-hidden">
        <li className="relative md:flex-1 md:flex">
          <div className="flex items-center px-6 py-4 space-x-4 text-sm font-medium leading-5">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
              <p className="text-indigo-600">01</p>
            </div>
            <p className="text-sm font-medium leading-5 text-indigo-600">
              Install react-pinpoint using npm: <br />
              <code className="p-1 rounded-sm bg-neutral-200 text-neutral-1000">npm install -D react-pinpoint</code>
            </p>
          </div>
        </li>
        <li className="relative md:flex-1 md:flex">
          <div className="flex items-center px-6 py-4 space-x-4 text-sm font-medium leading-5">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
              <p className="text-indigo-600">02</p>
            </div>
            <p className="text-sm font-medium leading-5 text-indigo-600">
              Invoke <code className="p-1 bg-neutral-200 text-neutral-1000">mountToReactRoot</code> and pass the project ID as the second argument in
              your React project’s entry file <br />
              <code className="p-1 bg-neutral-200 text-neutral-1000">mountToReactRoot(rootDom, projectID)</code>
            </p>
          </div>
        </li>
        <li className="relative md:flex-1 md:flex">
          <div className="flex items-center px-6 py-4 space-x-4 text-sm font-medium leading-5">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
              <p className="text-indigo-600">03</p>
            </div>
            <p className="text-sm font-medium leading-5 text-indigo-600">
              Interact with your app and data will be sent to React Pinpoint website here.
            </p>
          </div>
        </li>
        <li className="relative md:flex-1 md:flex">
          <div className="flex items-center px-6 py-4 space-x-4 text-sm font-medium leading-5">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
              <p className="text-indigo-600">04</p>
            </div>
            <p className="text-sm font-medium leading-5 text-indigo-600">Refresh this page and see your data displayed!</p>
          </div>
        </li>
      </ul>
    </div>
  );

  return authorized && loaded ? (
    <Layout>
      <Nav loggedIn={true}></Nav>
      <Breadcrumbs text="> Project" />
      <div className="flex flex-col items-center bg-neutral-100 ">
        <div className="flex flex-col items-center p-10 ">
          <p className="pt-4 text-xl font-semibold leading-tight text-indigo-600">{name}</p>
          <p className="pt-4 text-lg font-medium leading-tight text-neutral-700">
            Your project ID is: <span className="font-semibold text-indigo-600">{id}</span>
          </p>
        </div>
        {dataLength ? treeDisplay : stepsDisplay}
      </div>
    </Layout>
  ) : (
    <Layout></Layout>
  );
}
