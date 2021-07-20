var wordPattern = function (pattern, str) {
  const arrayStr = str.split(" ");
  if (pattern.length !== arrayStr.length) {
    return false;
  }

  const hashMap = {};
  const hashMap2 = {};
  for (let i = 0; i < arrayStr.length; i++) {
    if (hashMap[pattern[i]] && hashMap[pattern[i]] !== arrayStr[i]) {
      return false;
    } else if (hashMap2[arrayStr[i]] && hashMap2[arrayStr[i]] !== pattern[i]) {
      return false;
    }

    hashMap[pattern[i]] = arrayStr[i];
    hashMap2[arrayStr[i]] = pattern[i];
  }

  return true;
};

console.log(wordPattern("abba", "test a b test")); // false
console.log(wordPattern("abba", "test a a test")); // true
console.log(wordPattern("abba", "test test test test")); // false

// {
//     'a': 'test',
//     'b': 'a'
// }

// {
//     'test': 'a',
//     'a': 'b'
// }

