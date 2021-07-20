// https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/389609/Full-Explanation-article-with-pseudo-code-Beats-JAVA-100-time-and-100-space-Solution

// Our goal is to find the maximum path sum. Now consider the following example.
//    10
//   /  \
// null null

// In this simple case we know that the max sum would be just the root node itself and the answer would be 10.
// So fo all leaf nodes the max sum path is the value of the node itself.

// Now let's consider the following example.

//    20
//   /  \
// 10    30
// Here there are multiple possibilities and we need to take care of the following FOUR PATHS that could be our max.

// 1. The root iself : 20
// 2. The root with the maximum from it's left subTree :
// 	    20
//     /
//   10
// 3. The root with the maximum from it's right subTree :

// 		20
// 		  \
// 	       30
// The root with it's left, right and itself
//    	 20
//    	 / \
//     10  30
// In case you are wondering why we did not choose the root.left (10) or root.right(30) alone in the calculation ( like I wondered ),
// that's because we would have already computed the result of it as a node in our recursion separately.

// This actually breaks down our code to a very simple pseudo code:

// if( root == null) return 0;
// left = recurse(leftChild);
// right = recurse(rightChild);

// // now find the max of all the four paths
// leftPath = root.value + left;
// rightPath = root.value + right;
// completePath = root.value + right + left;

// result = max( root.value, leftPath, rightPath, completePath );

// return max(leftPath, rightPath);

// What's interesting to note here is the last line of the code :

// return max(leftPath, rightPath);

// Wondering why did we do that ?

// Well, we know that we did all the calculations possible if the tree only consists of the current node as root in any possible recursion cycle. And the result of that cycle would have been stored in the result variable.
// But, what if the current node is just a child of it's parent. Then it needs to return a value, such that the root had to be part of the answer.
// So if the root has to be part of the answer, it should return what's the maximum value it can return if it's part of it.
// That would be either of the three cases here :

// 1. The root iself : 20
// 2. The root with the maximum from it's left subTree :
// 	    20
// 	   /
//   10
// 3. The root with the maximum from it's right subTree :

// 		20
// 		  \
// 	       30

var maxPathSum = function (root) {
  let result = -Number.MAX_SAFE_INTEGER;

  // if( root == null) return 0;
  // left = recurse(leftChild);
  // right = recurse(rightChild);

  // // now find the max of all the four paths
  // leftPath = root.value + left;
  // rightPath = root.value + right;
  // completePath = root.value + right + left;

  // result = max( root.value, leftPath, rightPath, completePath );

  // return max(leftPath, rightPath);

  const dfs = (node) => {
    if (node === null) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    const leftPath = left + node.val;
    const rightPath = right + node.val;
    const completePath = node.val + left + right;

    // update result
    result = Math.max(result, node.val, completePath, leftPath, rightPath);

    // don't include negative number into path result
    return Math.max(0, leftPath, rightPath);
  };

  dfs(root);

  return result;
};

const input = {
  val: -10,
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
// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
console.log(maxPathSum(input));

const input2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
console.log(maxPathSum(input2));
