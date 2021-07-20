function solution(a) {
    let right = 0, left = 0
    const k = 2
    let result = 0
    const count = {}
    for (let i = 0; i < a.length; i++) {
        if (!count[a[i]]) {
            count[a[i]] = 0 // khong lap
        }
    }

    while (right < a.length) {
        count[a[right]]++

        if (count[a[right]] > k) {
            while (count[a[right]] != 1) {
                count[a[left]]--
                left++
            }
        }

        result = Math.max(right - left + 1, result)

        right += 1
    }

    return result
}

// console.log(solution('abaacdeeedc'))
// console.log(solution('abbabef'))
console.log(solution([5, 4, 5, 5, 6, 7, 8, 8, 8, 7, 6]))
// console.log(solution([1, 2, 3, 3, 2]))