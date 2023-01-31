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
 * @return {boolean}
 */
var isValidBST = function (root) {

  return validate(root, -Infinity, Infinity);
};


var validate = function (node, lower, upper) {

  if (node == null) {

    // empty node or empty tree
    return true;
  }

  if ((node.val <= lower) || (node.val >= upper)) {
    return false
  }

  return validate(node.left, lower, node.val) && validate(node.right, node.val, upper);

}

const data = {
  value: 2,
  left: {
    value: 1,
    left: null,
    right: null,
  },
  right: {
    value: 3,
    left: null,
    right: null,
  },
};

// console.log(isValidBST(data, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
console.log(isValidBST(data));

// const data2 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 3,
//     left: null,
//     right: null,
//   },
// };

// console.log(isValidBST(data2, -Infinity, Infinity));

const data3 = {
  value: 5,
  left: {
    value: 1,
    left: null,
    right: null,
  },
  right: {
    value: 4,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: null,
      right: null,
    },
  },
};

console.log(isValidBST(data3));
