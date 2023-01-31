const breathFirstSearchNaryTree = function (root, target) {
    if (root === null) {
        return null
    }

    if (root.val === target) {
        return root
    }

    let queue = [root]
    const visited = new Set()

    while (queue.length > 0) {
        const node = queue.shift() // dequeue simulation
        if (node.val === target) {
            return node
        }

        if (!visited.has(node)) {
            if (Array.isArray(node.children) && node.children.length > 0) {
                for (let i = 0; i < node.children.length; i++) {
                    queue.push(node.children[i])
                }
            }
        }

    }

    return null
}

const input = {
    val: 1,
    children: [
        {
            val: 3,
            children: [
                {
                    val: 5,
                    children: [],
                },
                {
                    val: 6,
                    children: [],
                },
            ],
        },
        {
            val: 2,
            children: [],
        },
        {
            val: 4,
            children: [],
        },
    ],
};

console.log(breathFirstSearchNaryTree(input, 3));
