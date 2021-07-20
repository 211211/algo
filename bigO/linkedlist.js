let l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

let l2 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

let head = null
let tail = null

while (l1 !== null && l2 !== null) {
    let minValue = Math.min(l1.val, l2.val)
    if (head === null) {
        head = {
            val: minValue,
            next: null
        }

        tail = head
    } else {
        tail.next = {
            val: minValue,
            next: null
        }

        tail = tail.next
    }

    if (l1.val < l2.val) {
        l1 = l1.next
    } else {
        l2 = l2.next
    }
}

while (l1 !== null) {
    if (head === null) {
        head = tail = {
            val: l1.val,
            next: null
        }
    } else {
        tail.next = {
            val: l1.val,
            next: null
        }

        tail = tail.next
    }
    l1 = l1.next
}

while (l2 !== null) {
    if (head === null) {
        head = tail = {
            val: l2.val,
            next: null
        }
    } else {
        tail.next = {
            val: l2.val,
            next: null
        }

        tail = tail.next
    }
    l2 = l2.next
}

ithead = head
// console.log(ithead)
while (ithead !== null) {
    console.log(ithead.val)
    ithead = ithead.next
}


// while (l1 !== null) {
//     if (head === null) {
//         head = tail = {
//             val: l1.val,
//             next: null
//         }
//     }
//     else {
//         tail.next = {
//             val: l1.val,
//             next: null
//         }

//         tail = tail.next
//     }
//     l1 = l1.next
// }