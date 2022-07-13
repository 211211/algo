const bfs = (root) => {
  if (root === null) {
    return null;
  }

  const queue = [root];
  while (queue.length) {
    const node = queue.shift(); // FIFO
    console.log(node.val);
    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
};

//       0
//     /   \
//    6     7
//   / \   / \
//  5   4 3   2

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

console.log(bfs(input)); // 0 -> 6 -> 7 -> 5 -> 4 -> 3 -> 2
