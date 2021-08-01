/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const stack = [root];
    while (stack.length) {
        const node = stack[stack.length - 1];
        if (node.children && node.children.length) {
            while (node.children.length) {
                stack.push(node.children.pop());
            }
        } else {
            result.push(node.val);
            stack.pop();
        }
    }

    return result;
};

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]

const input = {
    val: 1,
    children: [
        {
            val: 3,
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
        {
            val: 2,
            children: [],
        },
        {
            val: 4,
            children: [],
        },
    ],
};

console.log(postorder(input));

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]