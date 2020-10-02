import Tree from 'react-d3-tree';

export default function TreeComponent({ ...treeData }) {
  return <Tree data={treeData} orientation="vertical" />;
}
