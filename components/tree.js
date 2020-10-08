import Tree from 'react-d3-tree';
import { useState } from 'react';
import Link from 'next/link';

const NodeLabel = ({ nodeData }) => {
  const stateLabels = [];
  if (nodeData.component_state) {
    for (const [key, value] of Object.entries(nodeData.component_state)) {
      if (key === 'next') stateLabels.push(<p className="text-xs">{key}: {value}</p>)
    }
  }
  return (<div className="flex flex-col items-center p-1 bg-white border rounded-md ">
    <p className="text-xs text-neutral-1000">
      Name: <span className="font-medium text-neutral-1000">{nodeData.name}</span>
    </p>
    <p className="text-xs">Time: {nodeData.self_base_duration && nodeData.self_base_duration.toFixed(2)}</p>
    {stateLabels}
  </div>)
};

export default function TreeComponent({ treeData, apiUrl, id }) {
  const [xSpacing, setXSpacing] = useState(125);
  const [ySpacing, setYSpacing] = useState(50);
  const [orientation, setOrientation] = useState('horizontal');
  return (
    <div className="relative w-full">
      <div className="absolute top-0 right-0 transparent">
        <Link href={`${apiUrl}/api/commit/${id}`}>
          <a
            type="button"
            className="flex items-center self-center px-2 py-3 mt-4 mr-4 text-sm font-medium leading-6 text-transparent transition duration-150 ease-in-out bg-white border-2 rounded-md border-neutral-500 text-neutral-700 hover:text-neutral-400 focus:outline-none active:text-neutral-800 active:bg-neutral-100"
          >
            View project data in JSON format
          </a>
        </Link>
      </div>
      <Tree
        data={treeData}
        orientation={orientation}
        transitionDuration={0}
        collapsible={false}
        nodeSize={{ x: xSpacing, y: ySpacing }}
        translate={{ x: 200, y: 400 }}
        zoomable
        styles={{
          links: {
            stroke: '#5850ec',
            strokeWidth: 2,
          },
        }}
        pathFunc="diagonal"
        allowForeignObjects
        nodeLabelComponent={{
          render: <NodeLabel key={`${id}`} className="bg-white" />,
          foreignObjectWrapper: {
            width: 100,
            height: 100,
            y: 10,
            x: 0,
          },
        }}
      />
      <div className="absolute bottom-0 right-0 m-4">
        <div className="my-2">
          <p className="text-sm font-medium text-center text-neutral-1000"> Orientation</p>
          <span className="relative z-0 inline-flex shadow-sm">
            <button
              type="button"
              onClick={() => setOrientation('horizontal')}
              className={
                orientation === 'horizontal'
                  ? 'relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-primary-1000 border border-gray-300 rounded-l-md  focus:z-10 focus:outline-none   active:bg-gray-100 active:text-gray-500'
                  : 'relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none   active:bg-gray-100 active:text-gray-500'
              }
            >
              <span className="w-5 h-5">X</span>
            </button>
            <button
              type="button"
              onClick={() => setOrientation('vertical')}
              className={
                orientation === 'vertical'
                  ? 'relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-white bg-primary-1000 transition duration-150 ease-in-out  border border-gray-300 rounded-r-md focus:z-10 focus:outline-none   active:bg-gray-100 active:text-gray-500'
                  : 'relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none   active:bg-gray-100 active:text-gray-500'
              }
            >
              <span className="w-5 h-5">Y</span>
            </button>
          </span>
        </div>

        <div className="my-2">
          <p className="text-sm font-medium text-center text-neutral-1000">X Spacing</p>
          <span className="relative z-0 inline-flex shadow-sm">
            <button
              type="button"
              onClick={() => {
                if (xSpacing >= 10) return setXSpacing(xSpacing - 10);
              }}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none active:bg-gray-100 active:text-gray-500"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => {
                if (xSpacing >= 10) return setXSpacing(xSpacing + 10);
              }}
              className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none active:bg-gray-100 active:text-gray-500"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </span>
        </div>

        <div>
          <p className="text-sm font-medium text-center text-neutral-1000">Y Spacing</p>
          <span className="relative z-0 inline-flex shadow-sm">
            <button
              type="button"
              onClick={() => {
                if (ySpacing >= 20) return setYSpacing(ySpacing - 10);
              }}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none active:bg-gray-100 active:text-gray-500"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => {
                if (ySpacing >= 20) return setYSpacing(ySpacing + 10);
              }}
              className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none active:bg-gray-100 active:text-gray-500"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
