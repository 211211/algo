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
 var averageOfLevels = function(root) {
    const result = []
    const queue = root !== null ? [root] : []
    let sum = 0
    while(queue.length > 0) {
        const qlen = queue.length
        sum = 0
        for(let i = 0; i < qlen; i++) {
            const node = queue.shift()
            sum += node.val
            
            if (node.left) {
                queue.push(node.left)
            }
            
            if (node.right) {
                queue.push(node.right)
            }
        }
        
        result.push(sum / qlen)
    }
    
    return result
};


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
 var averageOfLevels2 = function(root) {
    const sum = []
    const count = []
    
    const dfs = (node, level) => {
        if (!node) {
            return []
        }
        
        if (!sum[level]) sum[level] = 0
        if (!count[level]) count[level] = 0
        
        sum[level] += node.val
        count[level]++
        
        if (node.left) dfs(node.left, level + 1)
        if (node.right) dfs(node.right, level + 1)
    }
    
    dfs(root, 0)
    
    for (let i = 0; i < sum.length; i++) {
        sum[i] = sum[i] / count[i]
    }
    
    return sum
};
