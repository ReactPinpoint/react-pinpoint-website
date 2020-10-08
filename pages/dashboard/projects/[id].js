/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
  const [copied, setCopy] = useState(false);

  const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;

  useEffect(() => {
    (async () => {
      const isAuth = await isAuthorized();
      if (!isAuth.success) {
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

        let data = await resp.json();

        if (data.length) {
          // sort all commits in ascending order based on the component_id
          data.forEach((change) => {
            return change.commits.sort((a, b) => a.component_id - b.component_id);
          });
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

  const onCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  const treeDisplay = (
    <div className="flex flex-row w-3/4 mx-auto my-4 bg-white border-4 rounded-lg h-95 border-neutral-700">
      <TreeMenu changes={changes} setChangeIndex={setChangeIndex} />
      <Tree treeData={treeData} apiUrl={apiUrl} id={id} />
    </div>
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

  const copiedAlert = (
    <div className="absolute p-4 bg-transparent rounded-md top-2/12 bg-green-50">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium leading-5 text-green-800">Success! Project ID has been copied to clipboard.</p>
        </div>
      </div>
    </div>
  );

  return authorized && loaded ? (
    <Layout>
      <Nav loggedIn />
      <Breadcrumbs text="> Project" />
      <div className="flex flex-col items-center bg-neutral-100 ">
        <div className="flex flex-col items-center p-10 ">
          {copied ? copiedAlert : null}
          <p className="pt-4 text-xl font-semibold leading-tight text-indigo-600">{name}</p>
          <p className="pt-4 text-lg font-medium leading-tight text-neutral-700">
            Your project ID is: <span className="font-semibold text-indigo-600">{id} </span>
            <CopyToClipboard onCopy={onCopy} text={id}>
              <svg
                className="inline-block w-5 h-5 cursor-pointer text-neutral-700 hover:text-neutral-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </CopyToClipboard>
          </p>
        </div>
        {dataLength ? treeDisplay : stepsDisplay}
      </div>
    </Layout>
  ) : (
    <Layout />
  );
}
