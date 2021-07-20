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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let result = 0;
  const dfs = (node, sumLevel = 0) => {
    if (node === null) {
      return;
    }

    sumLevel += parseInt(node.val, 10);
    if (sumLevel === targetSum) {
      result++;
    }

    dfs(node.left, sumLevel);
    dfs(node.right, sumLevel);
  };

  dfs(root);

  return result;
};

const input = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: -2,
        left: null,
        right: null,
      },
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: -3,
    left: null,
    right: {
      val: 11,
      left: null,
      right: null,
    },
  },
};

console.log(pathSum(input));
