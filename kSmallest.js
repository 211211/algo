// Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.

var kthSmallest = function(root, k) {
    const sortedArr = [];

    // InOrder Traversal
    function callDFS(node) {
        if(!node) return;
        
        callDFS(node.left);
        sortedArr.push(node.val);
        callDFS(node.right);
    }
    
    callDFS(root);
    return sortedArr[k-1];
};