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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (root === null) {
    return false;
  }

  return (
    isIdentical(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};

var isIdentical = function (node, sub) {
  if (node === null && sub === null) {
    return true;
  }

  if (node === null || sub === null) {
    return false;
  }

  if (node.val !== sub.val) {
    return false;
  }

  return isIdentical(node.left, sub.left) && isIdentical(node.right, sub.right);
};

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

const input3 = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: null,
    right: null,
  },
};

const subNode3 = {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

console.log(isSubtree(input3, subNode3));

// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

const input2 = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: 5,
    left: null,
    right: null,
  },
};

const subNode2 = {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

console.log(isSubtree(input2, subNode2));
