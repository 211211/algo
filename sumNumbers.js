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
var sumNumbers = function (root) {
  const paths = [];
  const dfs = (node, path = []) => {
    if (node === null) {
      return null;
    }

    path.push(node.val);
    if (node.left === null && node.right === null) {
      paths.push([...path]);
    }

    dfs(node.left, path);
    dfs(node.right, path);
    path.pop();
  };

  dfs(root);

  let result = 0;
  console.log(paths);
  for (let i = 0; i < paths.length; i++) {
    let sumString = paths[i].toString().split(",").join("");
    console.log({ sumString });
    result += parseInt(sumString, 10);
  }

  return result;
};

// var sumNumbers = function (root) {
//     let result = 0
//     const dfs = (node, path = []) => {
//       if (node === null) {
//         return null;
//       }
  
//       path.push(node.val);
//       if (node.left === null && node.right === null) {
//         result += parseInt(path.toString().split(",").join("") ,10)
//       }
  
//       dfs(node.left, path);
//       dfs(node.right, path);
//       path.pop();
//     };
  
//     dfs(root);
  
//     return result;
//   };

var sumNumbers = function(root, sum = '') {
    if(!root) return 0;

    sum += root.val;
    if(!root.left && !root.right) return parseInt(sum);

    return sumNumbers(root.left, sum) + sumNumbers(root.right, sum);
};

const input = {
  val: 4,
  left: {
    val: 9,
    left: {
      val: 5,
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
    val: 0,
    left: null,
    right: null,
  },
};

console.log(sumNumbers(input));
