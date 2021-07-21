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
var getMinimumDifference = function (root) {
  if (root === null) {
    return 0;
  }

  // 0 <= Node.val <= 105
  let min = Number.MAX_SAFE_INTEGER;
  let lastValue = null

  const dfs = (node) => {
    if (node === null) {
      return min;
    }

    if (node.left) {
      dfs(node.left);
    }

    if (lastValue !== null) {
        min = Math.min(min, Math.abs(node.val - lastValue));
    }
    lastValue = node.val

    if (node.right) {
      dfs(node.right);
    }
  };

  dfs(root);

  return min;
};

const input = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: null,
  },
};

console.log(getMinimumDifference(input));

const input2 = {
  val: 1,
  left: null,
  right: {
    val: 5,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};

console.log(getMinimumDifference(input2));


const input3 = {
    val: 236,
    left: {
      val: 104,
      left: null,
      right: {
        val: 227,
        left: null,
        right: null,
      },
    },
    right: {
      val: 701,
      left: null,
      right: {
          val: 991,
          left: null,
          right: null,
        },
    },
  };
  
  console.log(getMinimumDifference(input3));