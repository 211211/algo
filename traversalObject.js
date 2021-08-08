// function traversal(root) {
//     if (root === null) {
//         return null;
//     }

//     console.log(root.val);
//     traversal(root.left);
//     traversal(root.right);
// }

// const input = {
//     val: 1,
//     left: {
//         val: 34,
//         left: null,
//         right: {
//             val: 23423,
//             left: null,
//             right: null,
//         },
//     },
//     right: {
//         val: 2,
//         left: {
//             val: 2424,
//             left: null,
//             right: null,
//         },
//         right: null,
//     },
// };
// traversal(input);

const input2 = [
    {
        val: 1,
        children: [
            {
                val: 2,
                children: [],
            },
            {
                val: 3,
                children: [
                    {
                        val: 323,
                        children: [],
                    },
                    {
                        val: 322,
                        children: [],
                    },
                ],
            },
            {
                val: 3234,
                children: [
                    {
                        val: 1,
                        children: [],
                    },
                    {
                        val: 1,
                        children: [],
                    },
                ],
            },
        ],
    },
];

function traversalNary(root) {
    if (!Array.isArray(root) || !root.length) {
        return;
    }

    const queue = root;

    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            console.log(node.val);
            if (Array.isArray(node.children)) {
                while (node.children.length) {
                    queue.push(node.children.shift());
                }
            }
        }
    }
}

traversalNary(input2);
