function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const deserialize = (data = '') => {
    if (!data) {
        return null
    }

    const queue = data.split(',')
    const traversal = (arr) => {
        const val = arr.shift() // dequeue
        if (!val || val === 'null') {
            return null
        }

        const node = new TreeNode(Number(val))
        node.left = traversal(arr)
        node.right = traversal(arr)

        return node
    }

    return traversal(queue)
}

console.log(deserialize('3,1,null,2,null,null,4,null,null'));