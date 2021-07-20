// Given a non-empty special binary tree consisting of nodes with the non-negative value, 
// where each node in this tree has exactly two or zero sub-node. 
// If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. 
// More formally, the property root.val = min(root.left.val, root.right.val) always holds.
// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' 
// value in the whole tree.
// If no such second minimum value exists, output -1 instead.


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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    if (!root) return -1;
    let min = Infinity;
    let premin = -1;

    let traverse = (node) => {
        if (!node) return;

        if (node.val < min) {
            premin = min;
            min = node.val
        } else if (node.val > min) {
            premin = premin < node.val ? premin : node.val
        }
        traverse(node.left)
        traverse(node.right)

    }
    traverse(root)
    return premin == Infinity ? -1 : premin
};
var findSecondMinimumValue = function(root) {
    if (root === null) {
        return -1
    }

    let min1 = root.val
    let min2 = Infinity
    const stack = [root]
    while(stack.length > 0) {
        const node = stack.pop() // LIFO
        if (min1 < node.val && node.val < min2) {
            min2 = node.val
        }
        
        if (node.left) {
            stack.push(node.left)
        }
        
        if (node.right) {
            stack.push(node.right)
        }
    }
    
    return min2 === Infinity ? -1 : min2
};