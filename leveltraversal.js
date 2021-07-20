// Return a level-order traversal of a tree's values.
// Each subarray represents a level in the tree.

var levelOrder = function (root) {
  const result = [];

  const traverseLevels = (nodes) => {
    if (nodes.length === 0) {
      return;
    }
    const stack = [];
    const children = [];
    nodes.forEach((node) => {
      if (node !== null) {
        stack.push(node.val);
        children.push(node.left, node.right);
      }
    });
    stack.length !== 0 && result.push(stack);
    traverseLevels(children);
  };
  traverseLevels([root]);

  return result;
};
// Given binary tree [3,9,20,null,null,15,7]:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]
