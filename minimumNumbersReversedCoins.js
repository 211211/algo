/* 
    There are N coins, each showing either heads or tails. We would like all the coins
     to form a sequence of alternating heads and tails. What is the minumum number of coins that
     must be reversed to archive this?

     Write a function 
     funtion Solution(A: Number[]): Number
*/

function solution(arr) {
    let resultwhenFlip0 = flipCoinNumbers(arr, 0)
    let resultwhenFlip1 = flipCoinNumbers(arr, 1)

    return Math.min(resultwhenFlip0, resultwhenFlip1)
}

function flipCoinNumbers(arr, assumeNo = 0) {
    let result = 0
    let nextExpect = assumeNo
    for (let i = 0; i< arr.length;i++) {
        if (arr[i] !== nextExpect) {
            result++
        }

        nextExpect = 1 - nextExpect
    }

    return result
}

console.log(solution([1, 0, 1, 0, 1, 1])) // expect -> 1 because after reversed [1, 0, 1, 0, 1, 0]
console.log(solution([1, 1, 0, 1, 1])) // expect -> 2 because after reversed [0, 1, 0, 1, 0]
console.log(solution([0, 1, 0])) // expect -> 0
console.log(solution([0, 1, 1, 0])) // expect -> 2 because after reversed [1, 0, 1, 0]
console.log(solution([1, 1, 1, 1]))