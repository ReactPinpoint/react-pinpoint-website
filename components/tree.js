import canUseDom from '../utils/can-use-dom';
if (canUseDOM()) {
  const ReactD3Tree = require('react-d3-tree');
  Tree = ReactD3Tree.default;
}

export default function TreeComponent({ ...treeData }) {
  if (!canUseDom()) return null;

  return <Tree data={treeData} orientation="vertical" />;
}
