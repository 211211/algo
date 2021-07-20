const modify = (nodes = null, nodeId = null, newProps = null) => {
  const { isChanged, nodes: modifiedNodes } = modifyObject(
    nodes,
    nodeId,
    newProps
  );
  console.log({ isChanged });
  return modifiedNodes;
};

const modifyObject = (nodes = null, nodeId = null, newProps = null) => {
  if (nodes === null || !Array.isArray(nodes) || !nodes.length) {
    return nodes;
  }

  const copiedNodes = [...nodes];
  let changed = false;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === nodeId && nodes[i].name !== newProps.name) {
      changed = true;
      copiedNodes[i].name = newProps.name;
    } else if (
      nodes[i].children &&
      Array.isArray(nodes[i].children) &&
      nodes[i].children.length
    ) {
      const { isChanged, nodes } = modifyObject(
        copiedNodes[i].children,
        nodeId,
        newProps
      );
      if (isChanged) {
        copiedNodes[i].children = nodes;
        changed = true;
      }
    }
  }

  return {
    nodes: changed ? copiedNodes : nodes,
    isChanged: changed,
  };
};

const oldNodes1 = [{ id: 1, name: "node 1" }];
const newNodes1 = modify(oldNodes1, 1, { name: "New name" });
console.log(newNodes1); // [{id: 1, name: 'New name'}]
console.log(newNodes1 === oldNodes1); // false

const oldNodes2 = [{ id: 1, name: "node 1" }];
const newNodes2 = modify(oldNodes2, 2, { name: "New name" });
console.log(newNodes2); // [{id: 1, name: 'node 1'}]
console.log(newNodes2 === oldNodes2); // true

const oldNodes3 = [
  { id: 1, name: "node 1", children: [{ id: 2, name: "node 2" }] },
];
const newNodes3 = modify(oldNodes3, 2, { name: "New name" });
console.log(newNodes3); // [{id: 1, name: 'node 1', children: [{id: 2, name: "node 2"}]}]
console.log(newNodes3 === oldNodes3); // false
