var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  return checker(root.left, root.right);
};

function checker(leftNode, rightNode) {
  if (leftNode === null && rightNode === null) {
    return true;
  }

  if (leftNode === null || rightNode === null) {
    return false;
  }

  if (leftNode.val !== rightNode.val) {
    return false;
  }

  return (
    checker(leftNode.left, rightNode.right) &&
    checker(leftNode.right, rightNode.left)
  );
}

// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).

const input = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
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
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

console.log(isSymmetric(input));
