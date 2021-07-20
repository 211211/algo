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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
  const paths = [];

  function dfs(node, path = []) {
    if (node === null) {
      return null;
    }

    path.push(node.val);
    if (node.left === null && node.right === null) {
      paths.push([...path]);
    }

    dfs(node.left, path);
    dfs(node.right, path);
    path.pop();
  }

  dfs(root);
  console.log(paths);

  for (let i = 0; i < paths.length; i++) {
    const sum = paths[i].reduce((a, b) => a + b, 0)
    if (sum === targetSum) {
      return true;
    }
  }

  return false;
};

const input = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: null,
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: {
    val: 8,
    left: null,
    right: null,
  },
};

console.log(hasPathSum(input, 22));

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

// Input: root = [1,2,3], targetSum = 5
// Output: false

// Input: root = [1,2], targetSum = 0
// Output: false
