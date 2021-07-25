const dfs = (root) => {
  if (root === null) {
    return null;
  }

  const stack = [root];
  while (stack.length) {
    const node = stack.pop(); // LIFO
    console.log(node.val);
    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }
};

const input = {
  val: 0,
  left: {
    val: 6,
    left: {
      val: 5,
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
    val: 7,
    left: {
      val: 3,
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

console.log(dfs(input, 22)); // 0 -> 7 -> 2 -> 3 -> 6 -> 4 -> 5
