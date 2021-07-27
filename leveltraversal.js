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


// var levelOrder = function (root) {
//     const result = [];

//     const queue = [root]
//     let level = 0
//     while(queue.length) {
//       const size = queue.length
//       for (let i = 0; i < size; i++) {
//         const node = queue.shift()
//         result.push(node.val)
//         if (node.left) {
//           queue.push(node.left)
//         }

//         if (node.right) {
//           queue.push(node.right)
//         }
//       }

//       level++
//     }

//     return result;
// };

var levelOrder = function (root) {
  const result = [];

  const dfs = (node) => {
    if (node === null) {
      return []
    }
    result.push(node.val)
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return result;
};

const input = {
  val: 3,
  left: {
      val: 9,
      left: {
          val: 8,
          left: null,
          right: null,
      },
      right: {
          val: 6,
          left: null,
          right: null,
      },
  },
  right: {
      val: 20,
      left: {
          val: 15,
          left: null,
          right: null,
      },
      right: {
          val: 7,
          left: null,
          right: null,
      },
  },
};


console.log(levelOrder(input))


var inOrder = function (root) {
  const result = [];

  const dfs = (node) => {
    if (node === null) {
      return []
    }
    
    dfs(node.left)
    result.push(node.val)
    dfs(node.right)
  }

  dfs(root)
  return result;
};

console.log(inOrder(input))