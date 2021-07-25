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
 * @param {number} limit
 * @return {TreeNode}
 */
var InsufficientNodesinRoottoLeafPaths = function (root, limit) {
  if (root === null) {
    return null;
  }

  const dfs = (node, sum = 0) => {
    if (node === null) {
      return null;
    }

    if (node.left === null && node.right === null) {
      if (sum + node.val < limit) {
        return null;
      }

      return node;
    }

    node.left = dfs(node.left, sum + node.val);
    node.right = dfs(node.right, sum + node.val);

    if (node.left === null && node.right === null) {
      return null;
    }

    return node;
  };

  return dfs(root);
};

// Input: root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1

const input = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
    right: {
      val: -99,
      left: {
        val: -99,
        left: null,
        right: null,
      },
      right: {
        val: -99,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: 3,
      left: {
        val: -99,
        left: {
          val: 12,
          left: null,
          right: null,
        },
        right: {
          val: 13,
          left: null,
          right: null,
        },
      },
      right: null,
    },
    right: {
      val: 7,
      left: {
        val: -99,
        left: null,
        right: null,
      },
      right: {
        val: 14,
        left: null,
        right: null,
      },
    },
  },
};

// Output: [1,2,3,4,null,null,7,8,9,null,14]

console.log(JSON.stringify(InsufficientNodesinRoottoLeafPaths(input, 1)));
// {
//     "val": 1,
//     "left": {
//         "val": 2,
//         "left": {
//             "val": 4,
//             "left": {
//                 "val": 8,
//                 "left": null,
//                 "right": null
//             },
//             "right": {
//                 "val": 9,
//                 "left": null,
//                 "right": null
//             }
//         },
//         "right": null
//     },
//     "right": {
//         "val": 3,
//         "left": null,
//         "right": {
//             "val": 7,
//             "left": null,
//             "right": {
//                 "val": 14,
//                 "left": null,
//                 "right": null
//             }
//         }
//     }
// }
