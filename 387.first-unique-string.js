/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // loop through s (O(n)) với n là chiều dài của s
    // đếm sự xuất hiện của mỗi ký tự
    // - Đã tồn tại thì + lên 1
    // - Chưa tồn tại thì gán = 1

    // loop through s (O(n)) với n là chiều dài của s
    // với mỗi ký tự trong s, kiểm tra trong bảng băm (hashtable), 
    // - nếu số lần xuất hiện = 1, return index
    // - nếu không tồn tại ký tự chỉ xuất hiện 1 lần, return -1

    let hash = {}
    // {
    //     'l': 1,
    //     'e': 3,
    //     't': 1,
    //     'c': 1,
    //     'o': 1,
    //     'd': 1,
    // }
    for (let i = 0; i < s.length; i++) {
        let currentCharacter = s[i]
        if (hash[currentCharacter]) {
            hash[currentCharacter]++
        } else {
            hash[currentCharacter] = 1
        }
    }

    let result = -1

    for (let i = 0; i < s.length; i++) {
        let currentCharacter = s[i]
        if (hash[currentCharacter] === 1) {
            result = i
            break;
        }
    }

    return result
};

console.log(firstUniqChar('leetcode')) // => 0 (l)
console.log(firstUniqChar('loveleetcode')) // => 2 (v)
console.log(firstUniqChar('aabb')) // => -1 (not found)