function solution(st, k) {
    let right = 0, left = 0
    let distinct = 0
    const count = {}
    let result = 0

    for (let i = 0; i < st.length; i++) {
        if (!count[st[i]]) {
            count[st[i]] = 0
        }
    }

    while (right < st.length) {
        if (count[st[right]] === 0) {
            distinct++
        }
        
        count[st[right]]++
        while (distinct > k) {
            count[st[left]]--
            if (count[st[left]] === 0) {
                distinct--
            }
            left++
        }

        if (distinct == k) {
            result = Math.max(right - left + 1, result)
        }

        right += 1
    }

    return result
}

console.log(solution('abbabef', 2))
console.log(solution('aaaaaa', 1))

var lengthOfLongestSubstring = function (s) {
    let right = 0, left = 0
    let result = 0
    const count = {}
    for (let i = 0; i < s.length; i++) {
        if (!count[s[i]]) {
            count[s[i]] = 0 // khong lap
        }
    }

    while (right < s.length) {
        count[s[right]]++

        if (count[s[right]] > 1)  {
            while (count[s[right]] != 1) {
                count[s[left]]--
                if (count[s[left]] === 0) {
                    distinct--
                }
                left++
            }
        }
        
        result = Math.max(right - left + 1, result)

        right += 1
    }

    return result
};

console.log(lengthOfLongestSubstring('abcabcbb'))
