/* 
    A string is considered balanced when every letter in the string 
    appears both in uppercase and lowercase. 
    For example, CATattac is balanced (a, c, t occur in both cases).
    Madam is not (a, d only appear in lowercase).
    Write a function that given a string returns the shortest balanced substring of that string.
*/

function solution(str) {
    let ans = Number.MAX_SAFE_INTEGER;
    if (typeof str !== "string" || !str) {
        return ans; // invalid string
    }

    for (let i = 0; i < str.length; i++) {
        let subString = "";
        for (let j = i; j < str.length; j++) {
            // i = 0 => azABaabba
            // i = 1 =>  zABaabba
            // i = 2 =>   ABaabba
            // ...
            subString += str[j];
            if (isBalanced(subString)) {
                ans = Math.min(ans, j - i + 1);
            }
        }
    }

    if (ans === Number.MAX_SAFE_INTEGER) {
        return -1;
    }

    return ans;
}

function isBalanced(str) {
    const _set = new Set(Array.from(str));
    for (let char of str) {
        const upperChar = char.toUpperCase();
        if (char === upperChar) {
            if (_set.has(char.toLowerCase())) {
                continue;
            }

            return false;
        }

        if (_set.has(char.toUpperCase())) {
            continue;
        }

        return false;
    }

    return true;
}

console.log(solution("azABaabba"));
console.log(solution("CATattac"));
