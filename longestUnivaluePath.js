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
var longestUnivaluePath = function (root) {
  let ans = 0;

  const longestArrowLength = function (node) {
    if (node === null) {
      return 0;
    }

    // left - right - node
    let longestArrowToLeft = longestArrowLength(node.left);
    let longestArrowToRight = longestArrowLength(node.right);

    if (node.left !== null && node.left.val === node.val) {
      longestArrowToLeft += 1;
    } else {
      longestArrowToLeft = 0;
    }

    if (node.right !== null && node.right.val === node.val) {
      longestArrowToRight += 1;
    } else {
      longestArrowToRight = 0;
    }

    ans = Math.max(ans, longestArrowToLeft + longestArrowToRight);
    return Math.max(longestArrowToLeft, longestArrowToRight);
  };

  longestArrowLength(root);

  return ans;
};

const input = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 1,
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
    val: 5,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};
// Input: root = [5,4,5,1,1,5]
// Output: 2
console.log(longestUnivaluePath(input));

const input2 = {
  val: 1,
  left: {
    val: 4,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};

// Input: root = [1,4,5,4,4,5]
// Output: 2
console.log(longestUnivaluePath(input2));
