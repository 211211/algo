const depthFirstSearchNaryTree = function (root, target) {
    if (root === null) {
        return null
    }

    if (root.val === target) {
        return root
    }

    if (Array.isArray(root.children) && root.children.length > 0) {
        for (let i = 0; i < root.children.length; i++) {
            const node = root.children[i]

            let result = depthFirstSearchNaryTree(node, target)
            if (result) {
                return result
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

console.log(depthFirstSearchNaryTree(input, 1));
