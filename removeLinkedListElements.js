/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function (head, val) {
//     if (!head) {
//         return null
//     }

//     let current = head
//     let prev = null

//     while (current !== null) {
//         if (current.val === val) {
//             if (prev) {
//                 prev.next = current.next
//             } else {
//                 // move forward head (our result)
//                 head = current.next
//             }
//         } else {
//             prev = current
//         }

//         current = current.next
//     }

//     return head
// };

var removeElements = function (head, val) {
    if (head === null) {
        return head
    }

    while (head && head.val === val) {
        head = head.next
    }

    if (head === null) {
        return head
    }

    let next = head.next
    let current = head

    while (next) {
        if (next.val === val) {
            current.next = next.next
        } else {
            current = next
        }

        next = next.next
    }

    return head
};

// 6->2->6->6->3->4->5->6
const input = {
    val: 6,
    next: {
        val: 6,
        next: {
            val: 6,
            next: {
                val: 6,
                next: {
                    val: 6,
                    next: {
                        val: 6,
                        next: {
                            val: 6,
                            next: {
                                val: 6,
                                next: null
                            }
                        }
                    }
                }
            }
        }
    }
}

const output = removeElements(input, 6)
console.log(output)
function printOutput(head) {
    let current = head
    while (current) {
        if (!current) {
            return null
        }
        console.log(current.val)
        current = current.next
    }
}
printOutput(output)