// Thuật toán Kadane – Tìm tập hợp con có tổng lớn nhất
// –  Là thuật toán quy hoạch động có thể tìm ra tập hợp con có tổng lớn nhất từ tập hợp ban đầu một cách nhanh chóng, tốc độ thực hiện O(n).
// – Chẳng hạn: A = {31, -41, 59, 26, -53, 58, 97, -93, -23, 84} , nên tập hợp con có tổng hợp nhất là {59, 26, -53, 58, 97}

// def max_subarray(A):
//     max_so_far = max_ending_here = A[0]
//     for x in A[1:]:
//         max_ending_here = max(x, max_ending_here + x)
//         max_so_far = max(max_so_far, max_ending_here)
//     return max_so_far

function solution(a) {
    let ans = a[0] // max_so_far
    let sum = a[0] // max_ending_here
    let left = 0, i = 1
    let rightAnswer = 0
    let leftAnswer = 0
    for (i; i < a.length; i++) {
        sum += a[i]
        if (sum > ans) {
            ans = sum
            rightAnswer = i
            leftAnswer = left
        }

        if (sum < 0) {
            left = i + 1
            sum = 0
        }
    }

    console.log(ans)
    console.log(`${leftAnswer + 1} ${rightAnswer + 1}`)
}

console.log(solution([4, -5, 4, -3, 4, 4, -4, 4, -5]))

function solution(a) {
    if (!Array.isArray(a)) {
        throw new Error('Wrong input')
    }

    let maxSoFar = a[0];
    let maxEndingHere = a[0];

    for (let i = 1; i < a.length; i++) {
        maxEndingHere = Math.max(a[i], maxEndingHere + a[i])
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }

    return maxSoFar
}

console.log(solution([4, -5, 4, -3, 4, 4, -4, 4, -5]))

