import Tree from 'react-d3-tree';

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

export default function TreeComponent({ treeData }) {
  return (
    <Tree
      data={treeData}
      orientation="horizontal"
      transitionDuration={0}
      collapsible={false}
      nodeSize={{ x: 125, y: 50 }}
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
  );
}
