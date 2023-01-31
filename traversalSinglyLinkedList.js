//       0
//     /   \
//    6     7
//   / \   / \
//  5   4 3   2

let linkedListData = {
    val: 'stereing',
    next: {
        val: {
            name: 'Trường',
            age: '22'
        },
        next: {
            val: 3,
            next: {
                val: ['1'],
                next: null
            }
        }
    }
}

// while (linkedListData.next !== null) {
//     // if (linkedListData.val) {
//     //     console.log(linkedListData.val)
//     // }
//     linkedListData = linkedListData.next
//     // console.log(linkedListData)
// }

let node = linkedListData

while (node.next !== null) {
    if (node.val) {
        console.log(node.val)
    }
    node = node.next
    console.log(node)
}

console.log({linkedListData})