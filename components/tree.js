import canUseDOM from '../utils/can-use-dom';
import Tree from 'react-d3-tree';

export default function TreeComponent({ treeData }) {

  return (
    <Tree 
      data={treeData} 
      orientation="horizontal"
      transitionDuration="0"
      collapsible={false}
    />
  );
}
