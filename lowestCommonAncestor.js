// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
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
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }
  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }

  if (left) {
    return left;
  }

  return right;
};

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

const input = {
  val: 3,
  right: {
    val: 1,
    left: {
      val: 0,
      right: null,
      left: null,
    },
    right: {
      val: 8,
      right: null,
      left: null,
    },
  },
  left: {
    val: 5,
    right: {
      val: 2,
      right: {
        val: 4,
        right: null,
        left: null,
      },
      left: {
        val: 7,
        right: null,
        left: null,
      },
    },
    left: {
      val: 6,
      right: null,
      left: null,
    },
  },
};

console.log(
  lowestCommonAncestor(
    input,
    {
      val: 5,
    },
    {
      val: 1,
    }
  )
);

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// Input: root = [1,2], p = 1, q = 2
// Output: 1

// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the tree.
