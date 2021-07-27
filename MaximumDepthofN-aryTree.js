/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
// var maxDepth = function (root) {
//     if (root === null) {
//         return 0;
//     }

//     let maxDepth = 0;
//     const traversal = (node, depth = 0) => {
//         if (node === null) {
//             return 0;
//         }

//         if (node.children.length) {
//             for (let i = 0; i < node.children.length; i++) {
//                 traversal(node.children[i], depth + 1);
//             }
//         } else {
//             maxDepth = Math.max(maxDepth, depth + 1);
//         }
//     };

//     traversal(root);
//     return maxDepth;
// };

// var maxDepth = function(root) {
//     if (root === null) {
//         return 0
//     }
    
//     let max = 0
//     for (let child of root.children) {
//         max = Math.max(max, maxDepth(child))
//     }
//     return max + 1
// };

var maxDepth = function(root) {
    if (root === null) {
        return 0
    }
    
    let level = 0
    
    const queue = [root]
    while(queue.length) {
        const size = queue.length
        for (let i = 0; i< size;i++) {
            const node = queue.shift()
            while(node.children.length) {
                queue.push(node.children.shift())
            }
        }
        
        level++
    }
    
    return level
};

const input = {
    val: 1,
    children: [
        {
            val: 3,
            children: [],
        },
        {
            val: 2,
            children: [],
        },
        {
            val: 4,
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
    ],
};

console.log(maxDepth(input));
