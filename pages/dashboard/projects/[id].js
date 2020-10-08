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
  const [changes, setChanges] = useState([]);
  const [treeData, setTreeData] = useState([{}]);
  const [loaded, setLoaded] = useState(false);
  const [changeIndex, setChangeIndex] = useState(0);
  const apiUrl = process.env.NODE_ENV !== 'development' ? process.env.API_URL_PROD : process.env.API_URL_DEV;
  useEffect(() => {
    (async () => {
      const authorized = await isAuthorized();
      if (!authorized.success) {
        setLoaded(false);
        router.push('/login');
      }
    })();

    const request = async () => {
      try {
        const resp = await fetch(`${apiUrl}/api/commit/${id}`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await resp.json();
        // console.log('data ->', data);
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

  useEffect(() => {
    if (!changes.length) return;
    // example, getting the first change
    // i put them in a map so that later on i can
    // reference it to populate each child_id with actual object.
    const componentMap = new Map();
    changes[changeIndex].commits.forEach((item) =>
      componentMap.set(item.component_id, {
        ...item,
        name: item.component_id, // name could be anything to display on d3
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
          component.children = populateChild(component.children_ids);
        }
        resultArr.push(component);
      }
      return resultArr;
    }
    if (result.children_ids.length > 0) {
      result.children = populateChild(result.children_ids);
    }
    setTreeData([result]);
  }, [changes, changeIndex]);

  return loaded ? (
    <Layout>
      <Nav loggedIn="true"></Nav>
      <Breadcrumbs text="> Project" />
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center p-10 ">
          <p className="pt-4 text-xl font-semibold leading-tight text-indigo-600">{name}</p>
          <p className="pt-4 text-lg font-medium leading-tight text-neutral-600">
            Your Project ID is: <span className="font-semibold text-indigo-600">{id}</span>
          </p>
          <p className="pt-4 text-lg font-medium leading-tight text-neutral-600"> Pass this ID to React Pinpoint.</p>
        </div>
        {loaded && (
          <Link href={`${apiUrl}/api/commit/${id}`}>
            <a
              type="button"
              className="self-end px-4 py-2 mx-auto mt-4 text-sm font-medium leading-5 text-white bg-indigo-600 border border-transparent rounded-md xl:mr-52 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
            >
              View project data in JSON format
            </a>
          </Link>
        )}
        {loaded ? (
          <div className="flex flex-row w-3/4 h-screen mx-auto my-4 bg-white border rounded">
            <TreeMenu changes={changes} setChangeIndex={setChangeIndex} />
            <Tree treeData={treeData} />
          </div>
        ) : (
          <div>
            <ul className="max-w-lg overflow-hidden">
              <li className="relative md:flex-1 md:flex">
                <div className="flex items-center px-6 py-4 space-x-4 text-sm font-medium leading-5">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
                    <p className="text-indigo-600">01</p>
                  </div>
                  <p className="text-sm font-medium leading-5 text-indigo-600">Iusto et officia maiores porro ad non quas.</p>
                </div>
              </li>
              <li className="relative md:flex-1 md:flex">
                <div className="flex items-center px-6 py-4 space-x-4 text-sm font-medium leading-5">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
                    <p className="text-indigo-600">02</p>
                  </div>
                  <p className="text-sm font-medium leading-5 text-indigo-600">
                    Iusto et officia usto et officia maioresusto et officia maiores porro ad non quasmaiores
                  </p>
                </div>
              </li>
              <li className="relative md:flex-1 md:flex">
                <div className="flex items-center px-6 py-4 space-x-4 text-sm font-medium leading-5">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
                    <p className="text-indigo-600">03</p>
                  </div>
                  <p className="text-sm font-medium leading-5 text-indigo-600">
                    Iusto et officia usto et officia maioresusto et officia maiores porro ad non quasmaiores
                  </p>
                </div>
              </li>
              <li className="relative md:flex-1 md:flex">
                <div className="flex items-center px-6 py-4 space-x-4 text-sm font-medium leading-5">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
                    <p className="text-indigo-600">04</p>
                  </div>
                  <p className="text-sm font-medium leading-5 text-indigo-600">
                    Iusto et officia maiores porro ad non usto et officia maioresusto et officia maiores quasmaiores
                  </p>
                </div>
              </li>
              <li className="relative md:flex-1 md:flex">
                <div className="flex items-center px-6 py-4 space-x-4 text-sm font-medium leading-5">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 border-2 border-indigo-600 rounded-full">
                    <p className="text-indigo-600">05</p>
                  </div>
                  <p className="text-sm font-medium leading-5 text-indigo-600">
                    Iusto et officia maiores porro usto et officia maiores ad non quasmaiores
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Layout>
  ) : (
    <Layout></Layout>
  );
}
