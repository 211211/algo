// Tree obj is an Object with attributes
// obj.x - type: int
// obj.l - type: Tree

// obj.r - type: Tree
const longestDistinctHash = new Set()
// class Node {
//     constructor(x = null) {
//         this.x = x
//         this.l = this.r = null
//     }

//     insert(root, x) {
//         if (root === null) {
//             return new Node(x)
//         } else {
//             let curr = root
//             let parent = root

//             while (curr !== null) {
//                 parent = curr
//                 if (curr.x > x) {
//                     curr = curr.l
//                 } else if (curr.x < x) {
//                     curr = curr.r
//                 }
//             }

//             if (x < parent.x) {
//                 parent.l = this.insert(parent.l, x)
//             } else if (x > parent.x) {
//                 parent.r = this.insert(parent.r, x)
//             }
//         }

//         return root
//     }


//     // left - node - right (LNR)
//     traversalInorder(root) {
//         if (root !== null) {
//             this.traversalInorder(root.l)
//             if (!longestDistinctHash.has(root.x)) {
//                 longestDistinctHash.add(root.x)
//             }
//             // console.log(root.x)
//             this.traversalInorder(root.r)
//         }
//     }
// }

// const node = new Node(1)
// node.insert(node, 2)
// node.insert(node, 3)
// node.insert(node, 3)
// node.insert(node, 6)
// node.insert(node, 2)
// node.insert(node, 3)
// node.insert(node, 1)
// node.insert(node, 5)
// node.insert(node, 6)
// // node.traversalInorder(node)
// console.log(node);
// const arr = Array.from(longestDistinctHash)
// console.log(arr)

const input = {
    x: 1,
    l: {
        x: 2,
        l: {
            x: 3,
            l: {
                x: 4,
                l: null,
                r: null
            },
            r: null
        },
        r: {
            x: 7,
            l: null,
            r: {
                x: 8,
                l: null,
                r: {
                    x: 9,
                    l: null,
                    r: {
                        x: 10,
                        l: null,
                        r: null
                    },
                },
            },
        },
    },
    r: null
}


function distinctPath(node) {

    function traversalInorder(root) {
        if (root !== null) {
            traversalInorder(root.l)
            if (!longestDistinctHash.has(root.x)) {
                longestDistinctHash.add(root.x)
            }
            // console.log(root.x)
            traversalInorder(root.r)
        }
    }

    traversalInorder(node)

    return Array.from(longestDistinctHash)
}

console.log(distinctPath(input))