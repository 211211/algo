// var lowestCommonAncestor = function (root, p, q) {
//     const pathToP = []
//     const pathToQ = []
//     let node = root
//     while (node !== null) {
//         const parent = node
//         if (node.val > p.val) {
//             node = node.left
//         } else if (node.val < p.val) {
//             node = node.right
//         } else {
//             pathToP.push(node.val)
//         }
//     }

//     node = root
//     while (node !== null) {
//         const parent = node
//         if (node.val > q.val) {
//             node = node.left
//         } else if (node.val < q.val) {
//             node = node.right
//         } else {
//             pathToQ.push(node.val)
//         }
//     }

//     const length = Math.max([pathToP.length, pathToQ.length])
//     let prev = -1
//     for (let i = 0; i < length; i++) {
//         if (pathToP[i] === pathToQ[i]) {
//             prev = pathToP[i]
//         } else {
//             return prev
//         }
//     }
// };

// const pathToValue = []
// function findNode(root, value) {
//     if (root === null || root.val === null || root.val === value) {
//         return root
//     }

//     let current = root
//     let previous = root
//     while (current) {
//         previous = current
//         if (current.val < value) {
//             pathToValue.push(current.right.val)
//             current = current.right
//         } else if (current.val > value) {
//             pathToValue.push(current.left.val)
//             current = current.left
//         }
//     }

//     if (previous.val < value) {
//         pathToValue.push(previous.right.val)
//         return previous.right
//     } else if (previous.val > value) {
//         pathToValue.push(previous.left.val)
//         return previous.left
//     }

//     pathToValue.push(root.val)
//     return root
// }

// findNode(root)
// console.log(pathToValue)

// const pNode = {
//     val: 2,
//     left: null,
//     right: null
// }

// const qNode = {
//     val: 4,
//     left: null,
//     right: null
// }

// console.log(lowestCommonAncestor(root, pNode, qNode))
const myrootnode = {
    "val": 6,
    "right": {
        "val": 8,
        "right": {
            "val": 9,
            "right": null,
            "left": null
        },
        "left": {
            "val": 7,
            "right": null,
            "left": null
        }
    },
    "left": {
        "val": 2,
        "right": {
            "val": 4,
            "right": {
                "val": 5,
                "right": null,
                "left": null
            },
            "left": {
                "val": 3,
                "right": null,
                "left": null
            }
        },
        "left": {
            "val": 0,
            "right": null,
            "left": null
        }
    }
}

// const myrootnode = {
//     "val": 2,
//     "right": null,
//     "left": {
//         "val": 1,
//         "right": null,
//         "left": null
//     }
// }

var lowestCommonAncestor = function(root, p, q) {
    const searchNode = (root, value, paths = []) => {
        if (root === null || root.val === value) {
            paths.push(root)
            return paths
        }

        paths.push(root)

        if (root.val < value) {
            return searchNode(root.right, value, paths)
        }

        return searchNode(root.left, value, paths)
    }
    
    const pathToP = searchNode(root, p.val, [])
    const pathToQ = searchNode(root, q.val, [])
    
    const minPath = pathToQ.length > pathToP.length ? pathToQ : pathToP
    let ans = null
    for (let i = 0; i < minPath.length; i++) {
        ans = minPath[i]
        if (!pathToP[i] || !pathToQ[i] || (pathToP[i] !== pathToQ[i])) {
            ans = minPath[i - 1]
            return ans
        }
    }

    return ans
};
console.log(lowestCommonAncestor(myrootnode, {
    val: 2
}, {
    val: 4
}))
// console.log(pathToQ)