// Given the root of a binary tree, return the inorder traversal of its nodes' values.

    //     1
    //      \
    //        2
    //       /
    //      3
    // Input: root = [1,null,2,3]
    // Output: [1,3,2]
    // Input: root = []
    // Output: []
    // Input: root = [1]
    // Output: [1]

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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const result = []
    function inorder (node) {
        if (node !== null) {
            inorder(node.left)
            result.push(node.val)
            inorder(node.right)
        }            
    }
    
    inorder(root)
    
    return result
};