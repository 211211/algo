const myrootnode = {
    "val": 1,
    "right": {
        "val": 2,
        "left": {
            "val": 3,
            "right": null,
            left: null
        },
        right: null
    },
    left: null
}


var inorderTraversal = function(root) {
    const result = []
    const inorderTraversal = (node) => {
        if (node !== null) {
            inorder(node.left)
            result.push(node.val)
            inorderTraversal(node.right)
        }        
    }
    inorderTraversal(root)
    return result
};

console.log(inorderTraversal(myrootnode))