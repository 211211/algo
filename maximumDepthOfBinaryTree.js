// var maxDepth = function(root) {
//     const paths = []
//     function traversal(node, path = []) {
//         if (node === null) {
//             return 0
//         }

//         path.push(node.val)
//         if (node.left === null && node.right === null) {
//             paths.push([...path])
//         }

//         traversal(node.left, path)
//         traversal(node.right, path)
//         path.pop()
//     }
//     traversal(root)
//     const lengthArr = paths.map(path => path.length)
//     if (lengthArr.length) {
//         return  Math.max(...lengthArr)
//     }

//     return 0
// };

const myrootnode = {
    "val": 3,
    "right": {
        "val": 20,
        left: {
            "val": 15,
            left: null,
            right: null
        },
        right: {
            "val": 7,
            left: null,
            right: null
        }
    },
    "left": {
        "val": 9,
        left: null,
        right: null
    }
}

// const fastestMaxDepth = function(root) {
//     if (!root) {
//         return 0
//     }

//     return Math.max(fastestMaxDepth(root.left), fastestMaxDepth(root.right)) + 1
// }


// console.log(fastestMaxDepth(myrootnode))
// console.log(fastestMaxDepth(null))

var minDepth = function(root) {
    if (root === null) {
        return 0
    }
    const result = []
    const dfs = (node, path = []) => {
        if (node === null) {
            return 0
        }

        path.push(node.val)
        if (node.left === null && node.right === null) {
            result.push([...path])
        }
        
        if (node.left) {
            dfs(node.left, path)
        }
        
        if (node.right) {
            dfs(node.right, path)
        }
        
        path.pop()
    }
    
    dfs(root, [])
    console.log({result})
    return Math.min(...result.map((item) => item.length))
};

console.log(minDepth(myrootnode))



// const maxDepthWithDFS = (root) => {
//     let maxDepth = 0
//     const dfs = (node, depth) => {
//         if (!node) {
//             maxDepth = Math.max(maxDepth, depth)
//             return
//         }

//         dfs(node.left, depth + 1)
//         dfs(node.right, depth + 1)
//     }

//     dfs(root, maxDepth)
//     return maxDepth
// }

// console.log(maxDepthWithDFS(myrootnode))