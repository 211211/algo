// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// var deleteDuplicates = function(head) {
//     let current = head
//     while(current !== null) {
//         if (current.next && current.val === current.next.val) {
//             current.next = current.next.next
//         } else {
//             current = current.next
//         }
//     }

//     return head
// }

// using two pointers
var deleteDuplicates = function(head) {
    if (!head) {
        return null
    }

    let current = head
    let next = head.next

    // when there is no next node
    while(next !== null) {
        if (current.val === next.val) {
            current.next = next.next
        } else {
            current = current.next
        }

        next = next.next
    }

    return head
}

// 1->1->2->3->3->4
const input = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: null
                    }
                }
            }
        }
    }
}

console.log(deleteDuplicates(input))