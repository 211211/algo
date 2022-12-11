// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/

// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

//      1
//    / | \
//   3  2  4
//   /\
//  5  6
// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3
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
var maxDepth = function (root) {
  let deepestLevel = 0;
  if (root === null) {
    return 0;
  }

  const queue = [root];
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      while (node.children.length > 0) {
        queue.push(node.children.shift());
      }
    }
    deepestLevel++;
  }

  return deepestLevel;
};

var maxDepthRecursive = function (root) {
  if (root === null) {
    return 0;
  }

  let level = 0;
  if (root.children) {
    for (let i = 0; i < root.children.length; i++) {
      level = Math.max(level, maxDepthRecursive(root.children[i]));
    }
  }

  return level + 1;
};

const maxDepthRecursive2 = function (root) {
  if (root === null) {
    return 0;
  }

  let maxDepth = 0;
  const traversal = (node, level = 0) => {
    if (node === null) {
      return 0;
    }

    if (node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        traversal(node.children[i], level + 1);
      }
    } else {
      maxDepth = Math.max(maxDepth, level + 1);
    }
  };

  traversal(root, 0);

  return maxDepth;
};

const maxDepthRecursive3 = function (root) {
  if (root === null) {
    return 0;
  }

  let maxDepth = 0;
  for (let i = 0; i < root.children.length; i++) {
    maxDepth = Math.max(maxDepth, maxDepthRecursive3(root.children[i]));
  }

  return maxDepth + 1;
};

const input = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        {
          val: 5,
          children: [],
        },
        {
          val: 6,
          children: [],
        },
      ],
    },
    {
      val: 2,
      children: [],
    },
    {
      val: 4,
      children: [],
    },
  ],
};

// console.log(maxDepth(input));
// console.log(maxDepthRecursive(input));
// console.log(maxDepthRecursive2(input));
console.log(maxDepthRecursive3(input));
