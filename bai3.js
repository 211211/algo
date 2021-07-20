// Tree obj is an Object with attributes
// obj.x - type: int
// obj.l - type: Tree
// obj.r - type: Tree
const longestPath = []
class Node {
    constructor(value = null) {
        this.x = value
        this.l = this.r = null
    }

    insert(root, value) {
        if (root === null) {
            return new Node(value)
        }

        if (value < root.x) {
            root.l = this.insert(root.l, value)
        } else if (root.x < value) {
            root.r = this.insert(root.r, value)
        }

        return root
    }

    insert2P(root, value) {
        if (root === null) {
            return new Node(value)
        } else {
            let curr = root
            let parent = root

            while (curr !== null) {
                parent = curr
                if (curr.value > value) {
                    curr = curr.left
                } else if (curr.value < value) {
                    curr = curr.right
                }
            }

            if (value < parent.value) {
                parent.left = this.insert2P(parent.left, value)
            } else if (value > parent.value) {
                parent.right = this.insert2P(parent.right, value)
            }
        }

        return root
    }

    searchNode(root, value) {
        if (root === null || root.x === value) {
            return root
        }

        // nếu giá trị cần tìm lớn hơn root node
        if (root.x < value) {
            return this.searchNode(root.r, value)
        }

        // giá trị cần tìm nhỏ hơn root node
        return this.searchNode(root.l, value)
    }

    search2P(root, value) {
        if (root === null || root.x === value) {
            return root
        }

        let curr = root
        let parent = root

        while (curr !== null) {
            parent = curr
            if (curr.value < value) {
                curr = curr.right
            } else if (curr.value > value) {
                curr = curr.left
            }
        }

        if (parent.value < value) {
            return parent.right
        } else if (parent.value > value) {
            return parent.left
        }

        return root
    }

    // left - node - right (LNR)
    traversalInorder(root) {
        if (root !== null) {
            this.traversalInorder(root.l)
            console.log(root.x)
            this.traversalInorder(root.r)
        }
    }
}

const node = new Node(30)
node.insert2P(node, 20)
node.insert2P(node, 40)
node.insert2P(node, 15)
node.insert2P(node, 25)
node.insert2P(node, 37)
node.insert2P(node, 45)
node.traversalInorder(node)
