const minDepth = (root) => {
    let min = Infinity
    if (root === null) {
        return min
    }

    const dfs = (node, level) => {
        if (root === null) {
            return 0
        }

        if (node.left === null && node.right === null) {
            min = Math.min(min, level)
        }


        if (node.left) {
            dfs(node.left, level + 1)
        }

        if (node.right) {
            dfs(node.right, level + 1)
        }
    }

    dfs(root, 1)

    return min
};

const input = {
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

console.log(minDepth(input));
