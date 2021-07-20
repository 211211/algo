// class Node {
//     constructor(data, next = null) {
//         this.data = data,
//             this.next = next
//     }
// }

const console = require("console")

// class ListNode {
//     constructor() {
//         this.head = null;
//     }

//     insertAtBeginning(data = null) {
//         // A newNode object is created with property data and next = null
//         let newNode = new Node(data);
//         // The pointer next is assigned head pointer so that both pointers now point at the same node.
//         newNode.next = this.head;
//         // As we are inserting at the beginning the head pointer needs to now point at the newNode.

//         this.head = newNode;
//         return this.head;
//     }

//     insertAtEnd(data) {
//         // A newNode object is created with property data and next=null

//         let newNode = new Node(data);
//         // When head = null i.e. the list is empty, then head itself will point to the newNode.
//         if (!this.head) {
//             this.head = newNode;
//             return this.head;
//         }
//         // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
//         let tail = this.head;
//         while (tail.next !== null) {
//             tail = tail.next;
//         }
//         tail.next = newNode;
//         return this.head;
//     }

//     // A helper function getAt() is defined to get to the desired position. This function can also be later used for performing delete operation from a given position.
//     getAt(index) {
//         let counter = 0;
//         let node = this.head;
//         while (node) {
//             if (counter === index) {
//                 return node;
//             }
//             counter++;
//             node = node.next;
//         }
//         return null;
//     }

//     // The insertAt() function contains the steps to insert a node at a given index.
//     insertAt(data, index) {
//         // if the list is empty i.e. head = null
//         if (!this.head) {
//             this.head = new Node(data);
//             return;
//         }

//         // if new node needs to be inserted at the front of the list i.e. before the head.
//         if (index === 0) {
//             this.head = new Node(data, this.head);
//             return;
//         }

//         // else, use getAt() to find the previous node.
//         const previous = this.getAt(index - 1);
//         let newNode = new Node(data);
//         newNode.next = previous.next;
//         previous.next = newNode;

//         return this.head
//     }

//     deleteFirstNode() {
//         if (!this.head) {
//             return;
//         }
//         this.head = this.head.next;
//         return this.head;
//     }

//     deleteLastNode() {
//         if (!this.head) {
//             return null;
//         }
//         // if only one node in the list
//         if (!this.head.next) {
//             this.head = null;
//             return;
//         }
//         let previous = this.head;
//         let tail = this.head.next;

//         while (tail.next !== null) {
//             previous = tail;
//             tail = tail.next;
//         }

//         previous.next = null;
//         return this.head;
//     }

//     deleteAt(index) {
//         // when list is empty i.e. head = null
//         if (!this.head) {
//             this.head = new Node(data);
//             return;
//         }
//         // node needs to be deleted from the front of the list i.e. before the head.
//         if (index === 0) {
//             this.head = this.head.next;
//             return;
//         }
//         // else, use getAt() to find the previous node.
//         const previous = this.getAt(index - 1);

//         if (!previous || !previous.next) {
//             return;
//         }

//         previous.next = previous.next.next;
//         return this.head
//     }

//     deleteList() {
//         this.head = null;
//     }
// }




class Node {
    constructor(value, next) {
        this.value = value === undefined ? 0 : value
        this.next = next === undefined ? null : next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    pushTail(value) {
        // insert function
        const node = new Node(value)
        if (this.head === null) {
            this.head = node
            return this.head
        }

        let tail = this.head
        // lap toi cuoi
        while (tail.next !== null) {
            tail = tail.next
        }

        tail.next = node
        return this.head
    }

    findMinValue() {
        // find min function
        let minValue = 0
        if (this.head === null) {
            return minValue
        }

        minValue = this.head.value || 0
        let node = this.head
        while (node !== null) {
            console.log('current value: ', node.value)
            console.log('minValue: ', minValue)
            if (minValue > node.value) {
                minValue = node.value
            }
            node = node.next
        }

        return minValue
    }

    print() {
        let node = this.head
        // lap toi cuoi
        while (node !== null) {
            console.log(node.value)
            node = node.next
        }
    }
}


let listNode = new LinkedList()
listNode.pushTail(1)
listNode.pushTail(2)
listNode.pushTail(3)
listNode.pushTail(4)
console.log(listNode.findMinValue())



function solution(n, a) {
    let leftIndex = 0, rightIndex = 0
    let minValue = a[0], maxValue = a[0]
    let ans = 0

    while (rightIndex < n) {
        minValue = Math.min(minValue, a[rightIndex])
        maxValue = Math.max(maxValue, a[rightIndex])
        while (Math.abs(maxValue - minValue) > 1) {
            leftIndex++
            minValue = Math.min(a[leftIndex], a[rightIndex])
            maxValue = Math.max(a[leftIndex], a[rightIndex])
        }

        ans = Math.max(ans, rightIndex - leftIndex + 1)
        console.log(`leftIndex: ${leftIndex}, rightIndex: ${rightIndex}, ans: ${ans}, minValue: ${minValue}, maxValue: ${maxValue}`)
        rightIndex++
    }

    return ans
}

// console.log(solution(5, [5, 4, 5, 5, 6])) // expected: 4
// console.log(solution(11, [5, 4, 5, 5, 6, 7, 8, 8, 8, 7, 6])) // expected: 5
// console.log(solution(5, [1, 4, 0, 1, 2])) // expected: 2
// console.log(solution(5, [1, 2, 3, 3, 2])) // expected: 4
// console.log(solution(5, [1, 1, 1, 1, 1])) // expected: 5
// console.log(solution(0, [])) // expected: 0
console.log(solution(10, [1, 1, 1, 1, 1, 1, 1, 13, 3, 3, 3, 5, 5, 5, 5, 5])) // expected: 4
console.log(solution(5, [3, 3, 4, 5, 5])) // expected: 3
console.log(solution(6, [5, 5, 6, 6, 5, 5])) // expected: 6
