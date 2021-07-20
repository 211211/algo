const vowelsHashMap = {
    'a': 'a',
    'e': 'e',
    'i': 'i',
    'o': 'o',
    'u': 'u',
    'A': 'A',
    'E': 'E',
    'I': 'I',
    'O': 'O',
    'U': 'U',
}

var reverseVowels = function (s) {
    s = s.split('')
    let left = 0, right = s.length - 1;
    while(left < right) {
        if(vowelsHashMap[s[left]] && vowelsHashMap[s[right]]) {
            [s[left], s[right]] = [s[right], s[left]]
            left++
            right--
        }

        if(!vowelsHashMap[s[left]]) {
            left++
        }

        if(!vowelsHashMap[s[right]]) {
            right--
        }
    }

    return s.join('')
};
console.log(reverseVowels('hello'))
