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
// var isUnivalTree = function (root) {
//   const uniValue = [];
//   const dfs = (node) => {
//     if (node === null) {
//       return;
//     }

//     if (!uniValue.length) {
//       uniValue.push(node.val);
//     } else if (uniValue[0] !== node.val) {
//       uniValue.push(node.val);
//     }

//     dfs(node.left);
//     dfs(node.right);
//   };

//   dfs(root);

//   return uniValue.length < 2;
// };
// Time Complexity: O(n), we possibly visit all nodes
// Space Complexity: O(H), call stack can possibly go as deep as height of tree

var isUnivalTree = function (root) {
  const uniValue = [];
  
  const bfs = () => {
    if (root === null) {
        return;
    }

    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift(); // dequeue
      if (!uniValue.length) {
        uniValue.push(node.val);
      } else if (uniValue[0] !== node.val) {
        uniValue.push(node.val);
      }
  
      if (node.left) {
        queue.push(node.left);
      }
  
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  bfs()

  return uniValue.length < 2;
};
// Time Complexity: O(n), we possibly visit all nodes
// Space Complexity: O(n / 2) == O(n), the fattest bottom level can be n / 2 at most

// Input: [1,1,1,1,1,null,1]
// Output: true

// Input: [2,2,2,5,2]
// Output: false

const input = {
  val: 1,
  left: {
    val: 1,
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
    val: 1,
    left: null,
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
};

console.log(isUnivalTree(input));

const input2 = {
  val: 2,
  left: {
    val: 2,
    left: {
      val: 2,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};

console.log(isUnivalTree(input2));
