const myrootnode = {
    "val": 1,
    "right": {
        "val": 3,
        left: null,
        right: null
    },
    "left": {
        "val": 2,
        "right": {
            "val": 5,
            left: null,
            right: null
        },
        left: null
    }
}

const result = []

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function traversal(root, path = []) {
    if (root === null) {
        return
    }

    path.push(root.val)
    if (root.left === null && root.right === null) {
        result.push(path.join('->'))
    }

    traversal(root.left, path)
    traversal(root.right, path)
    path.pop()
}

traversal(myrootnode)

console.log(result)

