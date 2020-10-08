import Tree from 'react-d3-tree';

const NodeLabel = ({ nodeData }) => {
  return (
    <div className="bg-white border max-h-full">
      <h2 className="text-xs">Name: {nodeData.name}</h2>
      <p className="text-xs">Time: {nodeData.self_base_duration && nodeData.self_base_duration.toFixed(2)}</p>
    </div>
  )
}

export default function TreeComponent({ treeData }) {
  return (
    <Tree
      data={treeData}
      orientation="horizontal"
      transitionDuration={0}
      collapsible={false}
      nodeSize={{ x: 150, y: 30 }}
      translate={{ x: 200, y: 400 }}
      zoomable={true}
      // textLayout={{textAnchor: "start", x: 15, y: -10, transform: undefined }}
      styles={{
        links: {
          stroke: '#5850ec',
          strokeWidth: 4,
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
          // x: 24
        }
      }}
    />
  );
}
