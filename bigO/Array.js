/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxLength = 0
    let count = 0
    let i = 0
    while (i < nums.length) {
        if (nums[i] === 1) {
            count++
            if (count > maxLength) {
                maxLength = count
            }
        } else {
            count = 0
        }

        i++
    }

    return maxLength
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))


function solution(X, N, P) {
    let nextTotal = 0
    for (let i = 0; i < N; i++) {
        nextTotal = X - P[i] + nextTotal
        console.log({nextTotal})
    }

    return nextTotal + X
}

console.log(solution(10, 3, [4, 6, 2]))


function solution(queries) {
    const arrString = queries.split(' ')
    const currentStack = []
    let currentNumber = -1
    let currentMin = 0
    for(let i = 0; i<arrString.length;i++) {
        currentNumber = arrString[i]

    }
}

console.log(solution())




// xuất ra một mảng chứa k phần tử bất kỳ phân biệt và ko chứa mảng con tương tự
// 4 2
// 1 2 2 3

// output
// 1 2 => true
// 2 3 => true

// input
// 8 3
// 1 1 2 2 3 3 4 5
// output
// 2 5
// 7 4
// 4 7 7 4 7 4 7
// output
// -1

// for i = 1 => n
//     for j = i => n
//         for k = i > j
// => O(n^3)


// l = -1
// right = -1
// 8 3
// 1 1 2 2 3 3 4 5
// 1. cho con trỏ right chạy và check đủ k phần tử phân biệt
// 2. Thu gọn [left, right], Check con trỏ left có thể tăng vị trí mà vẫn thỏa mãn minimal by inclusion hay ko
// *note: đếm phân phối (check duy nhất)
// count{1} = 2
// count{2} = 2
// count{3} = 2
// count{4} = 1
// count{5} = 1
// Check biến distinct mỗi lần lặp để match k
// loại bỏ các phàn tử a[l] đến khi count[a[l]] == 1. Nghĩa là ko thể loại trừ phần tử cuối cùng vì sẽ vi phạm minimal by inclusion


//         1 1 2 2 3 3 4 5
//         0 1 2 3 4 5 6 7
//         count{1} = 2
//         count{2} = 2
//         count{3} = 2
//         count{4} = 1
//         count{5} = 1

//         l = 2
//         r = 5
//         d = 3 (= k)
//         return index of the array



// function main() {
//     read(n, k)
//     read(a1, ..., a[n])
//     count[0... n] ~ 10^6
//     l = 1, right = 0, d = 0

//     while (r <= n) { // khi right vẫn còn nhỏ hơn tổng n
//         r+=1
//         if (count[a[r]]) == 0 {
//             d+=1
//         }
//         count[a[r]] += 1

//         while (d === k) {
//             if (count[a[l]] === 1) {
//                 print(l, r)
//                 exit()
//             }
//             count[a[l]] -= 1
//             l+= 1
//         }
//     }

//     print (-1, -1)
// }




// https://v2.bigocoder.com/courses/36/lectures/483/problems/521?view=statement
function minimalByInclusion(a = '', k = 0) {
    let right = 0
    let distinct = 0
    let i = 0
    const count = {}
    let result = ''
    for (i = 0; i < a.length; i++) {
        if (!count[a[i]]) {
            count[a[i]] = 0
        }
    }

    console.log({count})

    while (right < a.length) {
        if (count[a[right]] === 0) {
            distinct +=1
            count[a[right]]++
            console.log({
                distinct,
                k
            })
            console.log({result})
            if (distinct > k) {
                return result.length
            }
        }
        result+=a[right]
        right += 1
    }

    return 0
}

console.log(minimalByInclusion('abbabef', 2))

// { '1': 2, '2': 2, '3': 2, '4': 1, '5': 1 }

// right = 0
// a[0] = 1
// count[1] = 2

function solution(n, k, a) {
    let left = 0, right = -1, sum = 0, ans = 0

    while (right < n) {
        right++
        sum += a[right]
        while (sum > k) {
            sum -= a[left]
            left++
        }

        ans = Math.max(ans, right - left)
    }
    
    return ans
}


console.log(solution(3, 3, [2, 2, 3]))


var maxArea = function(height) {
    const n = height.length
    let left = n - 1, right = n - 1, sum = 0, ans = 0
    while (right > 0) {
        sum = a[left] * a[right]
        while (sum > k) {
            sum -= a[left]
            left++
        }
        maxDai = height[0] + height[left]
        
        ans = Math.max(ans, right - left + 1)
        right--
    }
    
    return ans 
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
