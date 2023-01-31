// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
// A string s is called good if there are no two different characters in s that have the same frequency.
// Given a string s, return the minimum number of characters you need to delete to make s good.
// The frequency of a character in a string is the number of times it appears in the string.
// For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

// Example 1:

// Input: s = "aab"
// Output: 0
// Explanation: s is already good.
// Example 2:

// Input: s = "aaabbbcc"
// Output: 2
// Explanation: You can delete two 'b's resulting in the good string "aaabcc".
// Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
// Example 3:

// Input: s = "ceabaacb"
// Output: 2
// Explanation: You can delete both 'c's resulting in the good string "eabaab".
// Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).

let solution = (str) => {
    let result = 0
    // tạo mảng chứa số lần xuất hiện của 26 ký tự tiếng anh
    const chars = Array(26).fill(0) // O(26)

    // Cập nhật lại số lần xuất hiện của từng ký tự trong mảng đầu vào
    for (let i = 0;i<str.length;i++) { // O(n)
        const code = str.charCodeAt(i) - 97
        chars[code]++
    }

    // Tạo một danh sách chứa số lần xuất hiện duy nhất
    const usedFreq = new Set()

    // với mỗi ký tự trong bảng chữ cái
    for (let i = 0; i < 26; i++) {
        // lấy ra số lần xuất hiện của ký tự hiện tại
        let currentFreq = chars[i]

        // lặp đi lặp lại khi 
        // 1. ký tự hiện tại có trong mảng đầu vào 
        // 2. và số lần xuất hiện đã tồn tại trong danh sách xuất hiện
        // vì mình cần tạo một good string mà ở đó mỗi ký tự có số lần xuất hiện là duy nhất
        while (currentFreq > 0 && usedFreq[currentFreq]) {
            currentFreq--
            result++
        }

        // cập nhật lại số lần xuất hiện của ký tự vừa xử lý
        // nếu ko tồn tại thì số lần xuất hiện vẫn là 0
        usedFreq[currentFreq] = usedFreq.add(currentFreq)
    }

    return result
};

console.log(solution("abc")); // => 2
console.log(solution("aab")); // => 0
console.log(solution("aaabbbcc")); // => 2
console.log(solution("ceabaacb")); // => 2
