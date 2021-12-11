/* 
    There are N coins, each showing either heads or tails. We would like all the coins
     to form a sequence of alternating heads and tails. What is the minumum number of coins that
     must be reversed to archive this?

     Write a function 
     funtion Solution(A: Number[]): Number

     https://gist.github.com/laumair/e61c16379c944c068aeaec073c04d78e
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


// /*
//  * There are N coins, each showing either heads or tails. 
//  * Make the coins to form a sequence of alternating heads or tails. 
//  * What is the minimum number of coins that must be reversed to achieve this?
//  */

// /**
//  * Reverses a bit. Returns 1 if 0 is provided and vice versa.
//  * 
//  * @method reverse
//  * 
//  * @param {number} bit
//  * 
//  * @returns {number} 
//  */
//  const reverse = (bit) => {
//     return bit === 0 ? 1 : 0;
// };

// /**
//  * Gets total number of reversals required if we were to transform provided array into an alternating sequence.
//  * 
//  * 
//  * @method getReversals
//  * 
//  * @param {array} arr
//  * @param {number} expected - 0 or 1
//  * 
//  * @returns {number}
//  */
// const getReversals = (arr, expected) => {
//     let reversals = 0;

//     arr.forEach((digit) => {
//         if (expected !== digit) {
//             reversals++;
//         }

//         expected = reverse(expected);
//     })

//     return reversals;
// };

// /**
//  * Returns minimum number of reversals required to form a sequence of alternating bits
//  * 
//  * @method getMinimumReversals
//  * 
//  * @param {array} arr
//  * 
//  * @returns {number} 
//  */
// const getMinimumReversals = (arr) => {
//     return Math.min(
//         getReversals(arr, 0),
//         getReversals(arr, 1)
//     );
// }