import Tree from 'react-d3-tree';
import { useState } from 'react';
import Link from 'next/link';

const NodeLabel = ({ nodeData }) => {
  return (
    <div className="flex flex-col items-center p-1 bg-white border rounded-md ">
      <p className="text-xs text-neutral-1000">
        Name: <span className="font-medium text-neutral-1000">{nodeData.name}</span>
      </p>
      <p className="text-xs">Time: {nodeData.self_base_duration && nodeData.self_base_duration.toFixed(2)}</p>
    </div>
  );
};

export default function TreeComponent({ treeData, apiUrl, id }) {
  const [xSpacing, setXSpacing] = useState(125);
  const [ySpacing, setYSpacing] = useState(50);
  const [orientation, setOrientation] = useState("horizontal");
  return (
    <div className="relative w-full">
      <div className="absolute top-0 right-0 bg-white">
        <Link href={`${apiUrl}/api/commit/${id}`}>
          <a
            type="button"
            className="flex items-center self-center px-2 py-3 mt-4 mr-4 text-sm font-medium leading-6 text-transparent transition duration-150 ease-in-out bg-white border-2 rounded-md border-neutral-500 text-neutral-700 hover:text-neutral-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-neutral-800 active:bg-neutral-100"
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
        nodeSize={{ x: xSpacing, y: ySpacing}}
        translate={{ x: 200, y: 400 }}
        zoomable={true}
        styles={{
          links: {
            stroke: '#5850ec',
            strokeWidth: 2,
          },
        }}
        pathFunc="diagonal"
        allowForeignObjects={true}
        nodeLabelComponent={{
          render: <NodeLabel className=".bg-white" />,
          foreignObjectWrapper: {
            width: 100,
            height: 100,
            y: 10,
            x: 0,
          },
        }}
      />
      <div className="absolute bottom-0 right-0">
        <button className="p-4" onClick={() => {
          if (orientation === "horizontal") return setOrientation("vertical");
          else return setOrientation("horizontal")
        }}>Change Orientation</button>
        <button className="p-4" onClick={() => setXSpacing(xSpacing + 10)}>X Spacing +</button>
        <button className="p-4" onClick={() => {if (xSpacing >= 10) return setXSpacing(xSpacing - 10)}}>X Spacing -</button>
        <button className="p-4" onClick={() => setYSpacing(ySpacing + 10)}>Y Spacing +</button>
        <button className="p-4" onClick={() => {if (ySpacing >= 20) return setYSpacing(ySpacing - 10)}}>Y Spacing -</button>
      </div>
    </div>
  );
}
