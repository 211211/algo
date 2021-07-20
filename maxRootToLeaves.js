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
var sumRootToLeaf = function (root) {
  let sum = 0;
  const paths = [];
  const dfs = (node, path = []) => {
    if (node === null) {
      return;
    }

    path.push(node.val);
    if (node.left === null && node.right === null) {
      paths.push(path);
      return;
    }

    dfs(node.left, [...path]);
    dfs(node.right, [...path]);

    path.pop();
  };

  dfs(root);

  for (let i = 0; i < paths.length; i++) {
    let tempSum = 0;
    const reversedArray = paths[i].reverse()
    for (let j = 0; j < reversedArray.length; j++) {
      if (reversedArray[j] === 1) {
        tempSum += Math.pow(2, j);
      }
    }

    sum += tempSum;
  }

  return sum;
};

const input = {
  val: 1,
  left: {
    val: 0,
    left: {
      val: 0,
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
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
};

console.log(sumRootToLeaf(input));

const input2 = {
  val: 1,
  left: {
    val: 0,
    left: null,
    right: null
  },
  right: null
};

console.log(sumRootToLeaf(input2));