// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

//     3
//    / \
//   9   20
//       /\
//      15 7
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Input: root = [1,null,2]
// Output: 2
// Input: root = []
// Output: 0
// Input: root = [0]
// Output: 1
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthRecursive = function (root) {
  let deepestLevel = 0;

  const dfs = (node, level) => {
    if (node !== null) {
      if (level > deepestLevel) {
        deepestLevel = level;
      }

      if (node.left) {
        dfs(node.left, level + 1);
      }

      if (node.right) {
        dfs(node.right, level + 1);
      }
    }
  };

  dfs(root, 1);

  return deepestLevel;
};

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  const queue = [root];
  let max = 0;
  while (queue.length) {
    max++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // dequeue
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.left);
      }
    }
  }

  return max;
};

const input = {
  val: 1,
  left: {
    val: 0,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
};

// console.log(maxDepthRecursive(input));
console.log(maxDepth(input));
