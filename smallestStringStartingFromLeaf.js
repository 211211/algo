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
 * @return {string}
 */
// var smallestFromLeaf = function (root) {
//   let paths = [];
//   const dfs = (node, path = []) => {
//     if (node === null) {
//       return 0;
//     }

//     path.push(node.val);

//     if (node.left === null && node.right === null) {
//       paths.push([...path.reverse()]);
//       return;
//     }

//     dfs(node.left, [...path]);
//     dfs(node.right, [...path]);
//   };

//   dfs(root);

//   if (!paths.length) {
//     return "";
//   }

//   console.log([...paths])
//   const result = paths
//     .sort((a, b) => a.length > b.length)[0]
//     .map((item) => String.fromCharCode(item + 97))
//     .join("");

//   return result;
// };

var smallestFromLeaf = function (root) {
  let result = "";
  const alphabhets = "abcdefghijklmnopqrstuvwxyz";

  const dfs = (node, prev = "") => {
    if (node === null) {
      return "";
    }

    const str = `${alphabhets[node.val]}${prev}`;
    if (node.left === null && node.right === null) {
      result = !result || result > str ? str : result;
    }

    dfs(node.left, str);
    dfs(node.right, str);
  };
  dfs(root);

  return result;
};

// Input: [0,1,2,3,4,3,4]
// Output: "dba"

// Input: [25,1,3,1,3,0,2]
// Output: "adz"
const input2 = {
  val: 25,
  left: {
    val: 1,
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
    val: 3,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
};

console.log(smallestFromLeaf(input2));

const input3 = {
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

console.log(smallestFromLeaf(input3));

// [3, 9, 20, null, null, 15, 7];
