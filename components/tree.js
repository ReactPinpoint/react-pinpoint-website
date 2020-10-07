import canUseDOM from '../utils/can-use-dom';
import Tree from 'react-d3-tree';

export default function TreeComponent({ treeData }) {

  return (
    <Tree 
      data={treeData} 
      orientation="horizontal"
      transitionDuration={0}
      collapsible={false}
      nodeSize={{ x: 100, y: 25}}
      translate={{ x: 200, y: 400 }}
      zoomable={true}
    />
  );
}
