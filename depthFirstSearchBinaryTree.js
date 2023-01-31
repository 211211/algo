const depthFirstSearchBinaryTree = function (root, target) {
    if (root === null) {
        return null
    }

    const stack = [root]
    let visited = new Set()

    while (stack.length > 0) {
        const node = stack.pop() // pop the node from the stack
        if (node.val === target) {
            return node
        }

        if (!visited.has(node)) {
            visited.add(node)
        }

        if (node.left) {
            stack.push(node.left)
        }

        if (node.right) {
            stack.push(node.right)
        }
    }

    return null
}

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

console.log(depthFirstSearchBinaryTree(input, 2));
