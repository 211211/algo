// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary search tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestorBinarySearchTree = function (root, p, q) {
  if (root === null) {
    return root;
  }

  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  const min = Math.min(p.val, q.val);
  const max = Math.max(p.val, q.val);

  if (root.val >= min && root.val <= max) {
    return root;
  }

  if (min > root.val) {
    return lowestCommonAncestorBinarySearchTree(root.right, p, q);
  }

  return lowestCommonAncestorBinarySearchTree(root.left, p, q);
};

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

const input = {
  val: 6,
  right: {
    val: 8,
    left: {
      val: 7,
      right: null,
      left: null,
    },
    right: {
      val: 9,
      right: null,
      left: null,
    },
  },
  left: {
    val: 2,
    right: {
      val: 4,
      right: {
        val: 5,
        right: null,
        left: null,
      },
      left: {
        val: 3,
        right: null,
        left: null,
      },
    },
    left: {
      val: 0,
      right: null,
      left: null,
    },
  },
};

console.log(
  lowestCommonAncestorBinarySearchTree(
    input,
    {
      val: 2,
    },
    {
      val: 8,
    }
  )
);

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

console.log(
  lowestCommonAncestorBinarySearchTree(
    input,
    {
      val: 2,
    },
    {
      val: 4,
    }
  )
);
