import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import isAuthorized from '../../../utils/is-authorized';

import Nav from '../../../components/nav';
import Breadcrumbs from '../../../components/breadcrumbs';
import Layout from '../../../components/layout';
const Tree = dynamic(() => import('../../../components/tree'), { ssr: false });
const TreeMenu = dynamic(() => import('../../../components/treemenu'), { ssr: false });

// const Commit = ({ commit }) => {
//   const { component_id, component_name, self_base_duration, parent_component_id, component_state, sibling_component_id, children_ids } = commit;
//   return (
//     <div className="m-4 border-2">
//       <p>Component id: {component_id}</p>
//       <p>Component name: {component_name}</p>
//       <p>Self base duration: {self_base_duration}</p>
//       <p>Parent component id: {parent_component_id}</p>
//       <p>Component state: {JSON.stringify(component_state)}</p>
//       <p>Sibling component id: {sibling_component_id}</p>
//       <p>Children ids: {JSON.stringify(children_ids)}</p>
//     </div>
//   );
// };

// const Change = ({ change }) => {
//   const { change_id, commits } = change;
//   const commitsList = commits.map((commit, i) => <Commit key={`Key${i}`} commit={commit} />);
//   return (
//     <div className="mt-8 mb-8 border-2">
//       <h2>Change {change_id}</h2>
//       {commitsList}
//     </div>
//   );
// };

// const myTreeData = [
//   {
//     name: 'root',
//     attributes: {
//       keyA: 'val A',
//       keyB: 'val B',
//       keyC: 'val C',
//     },
//     children: [
//       {
//         name: 'Level 2: A',
//         attributes: {
//           keyA: 'val A',
//           keyB: 'val B',
//           keyC: 'val C',
//         },
//       },
//       {
//         name: 'Level 2: B',
//         attributes: {
//           keyA: 'val A',
//           keyB: 'val B',
//           keyC: 'val C',
//         },
//       },
//     ],
//   },
// ];

export default function Project() {
  const router = useRouter();
  const { id, name } = router.query;
  const [changes, setChanges] = useState([]);
  const [treeData, setTreeData] = useState([
    {
      name: 'empty for now',
    },
  ]);
  const [loaded, setLoaded] = useState(false);
  const [changeIndex, setChangeIndex] = useState(0);
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
    // console.log('RESULT', result);
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

  return (
    <Layout>
      <Nav loggedIn="true"></Nav>
      <Breadcrumbs text="> Project" />
      <div className="flex flex-col items-center">
        <p className="text-2xl">{name}</p>
        <p>Your project id is: {id}. Pass this id to react pinpoint.</p>
        {loaded ? (
          <div className="flex flex-row w-3/4 h-screen bg-white">
            <TreeMenu changes={changes} setChangeIndex={setChangeIndex} />
            <Tree treeData={treeData} />
          </div>
        ) : (
          <div>
            <ul class="overflow-hidden max-w-lg">
              <li class="relative md:flex-1 md:flex">
                <div class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
                  <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                    <p class="text-indigo-600">01</p>
                  </div>
                  <p class="text-sm leading-5 font-medium text-indigo-600">Iusto et officia maiores porro ad non quas.</p>
                </div>
              </li>
              <li class="relative md:flex-1 md:flex">
                <div class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
                  <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                    <p class="text-indigo-600">02</p>
                  </div>
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    Iusto et officia usto et officia maioresusto et officia maiores porro ad non quasmaiores
                  </p>
                </div>
              </li>
              <li class="relative md:flex-1 md:flex">
                <div class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
                  <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                    <p class="text-indigo-600">03</p>
                  </div>
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    Iusto et officia usto et officia maioresusto et officia maiores porro ad non quasmaiores
                  </p>
                </div>
              </li>
              <li class="relative md:flex-1 md:flex">
                <div class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
                  <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                    <p class="text-indigo-600">04</p>
                  </div>
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    Iusto et officia maiores porro ad non usto et officia maioresusto et officia maiores quasmaiores
                  </p>
                </div>
              </li>
              <li class="relative md:flex-1 md:flex">
                <div class="px-6 py-4 flex items-center text-sm leading-5 font-medium space-x-4">
                  <div class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                    <p class="text-indigo-600">05</p>
                  </div>
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    Iusto et officia maiores porro usto et officia maiores ad non quasmaiores
                  </p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
}
