let solution = (str) => {
    let count = 0;
    // tạo mảng chứa số lần xuất hiện của 26 ký tự tiếng anh
    const chars = Array(26).fill(0); // O(26)

    // Cập nhật lại số lần xuất hiện của từng ký tự trong mảng đầu vào
    for (let i = 0; i < str.length; i++) {
        // O(n)
        const code = str.charCodeAt(i) - "a".charCodeAt();
        chars[code]++;
    }

    // với mỗi ký tự trong bảng chữ cái
    for (let i = 0; i < 26; i++) {
        // lấy ra số lần xuất hiện của ký tự hiện tại
        if (chars[i] % 2 === 1) {
            count++;
        }
    }

    if (count <= 1) {
        return 0;
    }

    return count - 1;
};

let solution2 = (s) => {
    if (s && s.length <= 1) {
        return 0;
    }
    let count = 0;
    let charCounts = {};
    for (let c of s) {
        if (charCounts[c]) {
            charCounts[c] += 1;
        } else {
            charCounts[c] = 1;
        }
    }
    for (let c in charCounts) {
        if (charCounts[c] % 2 === 1) {
            count += 1;
        }
    }
    return count > 1 ? count - 1 : count;
};

console.log(solution("ervervige")); // => 2 as reviver
console.log(solution("aaabab")); // => 0 as aabbaa
console.log(solution("x")); // => 0

console.log(solution2("ervervige")); // => 2 as reviver
console.log(solution2("aaabab")); // => 0 as aabbaa
console.log(solution2("x")); // => 0
