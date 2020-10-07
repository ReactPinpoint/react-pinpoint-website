import Tree from 'react-d3-tree';

export default function TreeComponent({ treeData }) {
  return (
    <Tree
      data={treeData}
      orientation="horizontal"
      transitionDuration={0}
      collapsible={false}
      styles={{
        links: {
          stroke: '#5850ec',
          strokeWidth: 4,
        },
      }}
    />
  );
}
