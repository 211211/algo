function solution(a) {
    let ans = a[0]
    let sum = a[0]
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

