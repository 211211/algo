// https://leetcode.com/problems/even-odd-tree/

// A binary tree is named Even-Odd if it meets the following conditions:

// The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
// For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
// For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
// Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.

// Constraints:

// The number of nodes in the tree is in the range [1, 10^5].
// 1 <= Node.val <= 10^6

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
var isEvenOddTree = function (root) {
  if (root === null) {
    return false;
  }

  const queue = [root];
  let level = 0;
  while (queue.length > 0) {
    const qLen = queue.length;
    let prev = -1;

    for (let i = 0; i < qLen; i++) {
      const node = queue.shift(); // dequeue in O(1)
      const currentValue = node.val;
      if (level % 2 === 0) {
        // tầng chẵn
        // giá trị phải tăng dần từ trái sang phải
        if (currentValue % 2 === 0) {
          // ở tầng chẵn số phải lẻ
          return false;
        }

        if (currentValue <= prev) {
          return false;
        }
      } else {
        // tầng lẻ
        // giá trị phải giảm dần từ trái sang phải
        if (currentValue % 2 !== 0) {
          // ở tầng lẻ số phải chẵn
          return false;
        }

        if (prev >= 0 && currentValue >= prev) {
          return false;
        }
      }

      prev = currentValue;

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    level++;
  }

  return true;
};

// Input: root = [1,10,4,3,null,7,9,12,8,6,null,null,2]
// Output: true
// Explanation: The node values on each level are:
// Level 0: [1]
// Level 1: [10,4]
// Level 2: [3,7,9]
// Level 3: [12,8,6,2]
// Since levels 0 and 2 are all odd and increasing, and levels 1 and 3 are all even and decreasing, the tree is Even-Odd.

const input = {
  val: 1,
  right: {
    val: 4,
    left: {
      val: 7,
      right: null,
      left: {
        val: 6,
        right: null,
        left: null,
      },
    },
    right: {
      val: 9,
      right: {
        val: 2,
        right: null,
        left: null,
      },
      left: null,
    },
  },
  left: {
    val: 10,
    right: null,
    left: {
      val: 3,
      right: {
        val: 8,
        right: null,
        left: null,
      },
      left: {
        val: 12,
        right: null,
        left: null,
      },
    },
  },
};

console.log(isEvenOddTree(input));

// Input: root = [5,4,2,3,3,7]
// Output: false
// Explanation: The node values on each level are:
// Level 0: [5]
// Level 1: [4,2]
// Level 2: [3,3,7]
// Node values in the level 2 must be in strictly increasing order, so the tree is not Even-Odd.

const input2 = {
  val: 5,
  right: {
    val: 2,
    left: {
      val: 7,
      right: null,
      left: null,
    },
    right: {
      val: 9,
      right: {
        val: 2,
        right: null,
        left: null,
      },
      left: null,
    },
  },
  left: {
    val: 4,
    right: {
      val: 3,
      right: null,
      left: null,
    },
    left: {
      val: 3,
      right: null,
      left: null,
    },
  },
};

console.log(isEvenOddTree(input2));

// Input: root = [5,9,1,3,5,7]
// Output: false
// Explanation: Node values in the level 1 should be even integers.

const input3 = {
  val: 5,
  left: {
    val: 9,
    left: {
      val: 3,
      right: null,
      left: null,
    },
    right: {
      val: 5,
      right: null,
      left: null,
    },
  },
  right: {
    val: 1,
    left: {
      val: 7,
      right: null,
      left: null,
    },
    right: null,
  },
};

console.log(isEvenOddTree(input3));



// Input: root = [1]
// Output: true

const input4 = {
  val: 1,
  left: null,
  right: null,
};

console.log(isEvenOddTree(input4));