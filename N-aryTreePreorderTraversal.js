/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    console.log(JSON.stringify(root));
    const result = [];

    if (root === null) {
        return result;
    }

    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        // console.log(node.val)
        result.push(node.val);
        while (node.children.length) {
            const newNode = node.children.pop()
            console.log({newNode})
            stack.push(newNode);
        }
    }

    return result;
};


const input = {
    "val": 1,
    "children": [
        {
            "val": 3,
            "children": [
                {
                    "val": 5,
                    "children": []
                },
                {
                    "val": 6,
                    "children": []
                }
            ]
        },
        {
            "val": 2,
            "children": []
        },
        {
            "val": 4,
            "children": []
        }
    ]
}

console.log(preorder(input))