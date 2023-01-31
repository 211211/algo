const breathFirstSearchBinaryTreeUsingQueue = function (root, target) {
    if (root === null) {
        return null
    }

    const queue = [root]
    let visited = new Set()

    while (queue.length > 0) {
        const node = queue.shift() // dequeue
        if (node.val === target) {
            return node
        }

        if (!visited.has(node)) {
            visited.add(node)
        }

        if (node.left) {
            queue.push(node.left)
        }

        if (node.right) {
            queue.push(node.right)
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

console.log(breathFirstSearchBinaryTreeUsingQueue(input, 2));
