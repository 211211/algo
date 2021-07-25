function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = function (root) {
  if (root === null) {
      return "null";
  }

  return `${root.val},${serialize(root.left)},${serialize(root.right)}`
};

const input3 = {
  val: 3,
  left: {
      val: 1,
      left: null,
      // left: {
      //     val: -1,
      //     left: null,
      //     right: null,
      // },
      right: {
          val: 2,
          left: null,
          right: null,
      },
  },
  right: {
      val: 4,
      left: null,
      right: null,
  },
};

console.log(serialize(input3));