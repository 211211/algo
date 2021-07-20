class Node {
    constructor(value = null) {
        this.value = value
        this.left = this.right = null
    }

    insert(root, value) {
        if (root === null) {
            return new Node(value)
        }

        if (value < root.value) {
            root.left = this.insert(root.left, value)
        } else if (root.value < value) {
            root.right = this.insert(root.right, value)
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
        if (root === null || root.value === value) {
            return root
        }

        // nếu giá trị cần tìm lớn hơn root node
        if (root.value < value) {
            return this.searchNode(root.right, value)
        }

        // giá trị cần tìm nhỏ hơn root node
        return this.searchNode(root.left, value)
    }

    search2P(root, value) {
        if (root === null || root.value === value) {
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

    delete(root, value) {
        if (root === null) {
            return root
        }

        if (value < root.value) {
            root.left = this.delete(root.left, value)
        } else if (value > root.value) {
            root.right = this.delete(root.right, value)
        } else {
            // root có cả left/right
            if(root.left === null) {
                const temp = root.right
                root = null
                return temp
            } else if (root.right === null) {
                const temp = root.left
                root = null
                return temp
            }

            // tìm giá trị nhỏ nhất của node bên phải
            const temp = this.findMin(root.right)
            root.value = temp.value
            root.right = this.delete(root.right, temp.value)
        }

        return root
    }

    // đi về bên trái cùng của một node
    findMin(root) {
        const curr = root
        while(curr.left !== null) {
            curr = curr.left
        }

        return curr
    }

    // left - node - right (LNR)
    traversalInorder(root) {
        if (root !== null) {
            this.traversalInorder(root.left)
            console.log(root.value)
            this.traversalInorder(root.right)
        }
    }

    // node - left - right (NLR)
    traversalPreorder(root) {
        if (root !== null) {
            console.log(root.value)
            this.traversalPreorder(root.left)
            this.traversalPreorder(root.right)
        }
    }

    // left - right - node (LRN)
    traversalPostorder(root) {
        if (root !== null) {
            this.traversalPostorder(root.left)
            this.traversalPostorder(root.right)
            console.log(root.value)
        }
    }

    size(root) {
        if (root === null) {
            return 0
        }

        return this.size(root.left) + 1 + this.size(root.right)
    }

    deleteTree(root) {
        if (root === null) {
            return
        }

        this.deleteTree(root.left)
        this.deleteTree(root.right)
        root = null
    }
}

const node = new Node(6)
node.insert(node, 2)
node.insert2P(node, 8)
node.insert(node, 0)
node.insert2P(node, 4)
node.insert(node, 7)
node.insert2P(node, 9)
node.insert2P(node, 3)
node.insert2P(node, 5)
console.log(JSON.stringify(node))
// console.log(node.searchNode(node, 1))
// console.log(node.search2P(node, ))
// node.delete(node, 40)
// console.log(node.traversalInorder(node)) // 15 20 25 30 37 40 45
// console.log(node.traversalPreorder(node)) // 30 20 15 25 40 37 45
// console.log(node.traversalPostorder(node)) // 15 25 20 37 45 40 30
// console.log(node.traversalPostorder(node)) // 15 25 20 37 45 40 30
// console.log(node.size(node))
// console.log(node.deleteTree(node))
// console.log(node)


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
 * @return {boolean}
 */
//  var isValidBST = function(root) {

// };



// function binarySearch(a = [], k) {
//     let l = 0
//     let r = a.length - 1
//     while (l <= r) {
//         const mid = Math.floor((l + r) / 2)
//         console.log({mid})
//         console.log({l})
//         console.log({r})
//         if (a[mid] === k) { // if (check(mid))
//             // ans = mid
//             return mid
//         } else if (a[mid] < k) {
//             r = mid - 1
//         } else {
//             l = mid + 1
//         }
//     }

//     return -1
// }

function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = parseInt((left + (right - left)) / 2, 10);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// console.log(binarySearch([3, 1, 2, 2, 2], 2))
console.log(binarySearch([-1,0,3,5,9,12], 9))

// let buffer = new ArrayBuffer(16)
// console.log(buffer.byteLength)
// if (buffer.byteLength === 16) {
//     console.log("Yes, it's 16 bytes.");
// } else {
//     console.log("Oh no, it's the wrong size!");
// }

// let int32View = new Int32Array(buffer)
// console.log(int32View.byteLength)
// for (let index = 0; index < int32View.length; index++) {
//     int32View[index] = index * 2
// }

// console.log(...int32View)

// // multiple view on the same data
// let int16View = new Int16Array(buffer);

// for (let i = 0; i < int16View.length; i++) {
//   console.log('Entry ' + i + ': ' + int16View[i]);
// }

// // two arrays are indeed viewed on the same data buffer
// int16View[0] = 32;
// console.log('Entry 0 in the 32-bit array is now ' + int32View[0]);



// // cho a[0], ... a[n]. Đếm số cặp phần tử a[i], a[j] thỏa a[i] + a[j] <= x với i < j
// const demCapPhanTuBangX = (arr = [], x) => {
//     const sortedArray = arr.sort((a, b) => a - b)
//     let left = 0, i = 0
//     let right = sortedArray.length - 1
//     let result = 0
//     while (left < right) {
//         if (sortedArray[left] + sortedArray[right] <= x) {
//             console.log(sortedArray[left], sortedArray[right])
//             left++
//             right--
//             result++
//         } else {
//             right--
//         }
//     }

//     return result
// }

// console.log(demCapPhanTuBangX([1, 3, 2, 4, 8, 10, 10, 10], 222))
// console.log(demCapPhanTuBangX([-1, 3, 2, -4, 8, 10, -10, 10], 0))

// const demCapPhanTuBangXTu2Mang = (arr1 = [], arr2 = [], x) => {
//     const SortedA = arr1.sort((a, b) => a - b)
//     const SortedB = arr2.sort((a, b) => a - b)

//     let i = 0, j = 0
//     let result = 0
//     while (i < SortedA.length && j < SortedB.length) {
//         if (SortedA[i] + SortedB[j] === x) {
//             i++
//             j++
//             result++
//         } else {
//             j--
//         }
//     }

//     return result
// }

// console.log(demCapPhanTuBangXTu2Mang([1, 3, 2, 4], [8, 10, 10, 10], 222))
// // console.log(demCapPhanTuBangX([-1, 3, 2, -4],[8, 10, -10, 10], 0))


// const numWaterBottles = (numBottles, numExchange) => {
//     // drink
//     let result = 0
//     let emptyBottles = numBottles
//     while (emptyBottles >= numExchange) {
//         const availableBottles = Math.floor(emptyBottles / numExchange) // lấy nguyên
//         result += availableBottles
//         emptyBottles = availableBottles + (emptyBottles % numExchange) // lấy dư
//     }

//     return result + numBottles
// }

// console.log(numWaterBottles(9, 3))

// console.log(numWaterBottles(15, 4))
// 0
// result: 15
// empty bottles: 15
// available bottles: 0
// 1
// available bottles =  emptyBottles / numExchange (15 / 4)
// result = 15 + (available bottles) = 18
// emptyBottles = 6
// 2
// available bottles =  emptyBottles / numExchange (6 / 4)
// result = 18 + (available bottles)
// emptyBottles = 2 < numExchange