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

 function isLeft(node) {
    return node.left === null && node.right === null
}

var sumOfLeftLeaves = function (root) {
  let sum = 0;

  const dfs = function (node, isLeftNode = false) {
    if (node === null) {
      return;
    }
      
    if (isLeft(node) && isLeftNode === true) {
      sum += node.val;  
    }

    dfs(node.left, true);
    dfs(node.right);
  };

  dfs(root);

  return sum;
};

const input = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
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

console.log(sumOfLeftLeaves(input));

const input2 = {
  val: 1,
  left: null,
  right: null,
};

console.log(sumOfLeftLeaves(input2));
