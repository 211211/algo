const solution = (message, k) => {
  if (message.length < k) {
    return message
  }

  const spaceIndexes = [];
  let result = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      spaceIndexes.push(i);
    }
  }

  let j = spaceIndexes.length;
  do {
    if (spaceIndexes[j] + 4 <= k) {
      for (let i = 0; i < spaceIndexes[j]; i++) {
        result += message[i];
      }

      result += " ...";
      return result;
    }
    j--;
  } while (j > 0);

  if (result === '') {
    return '...'
  }

  return result;
};

// And ... would be incorrect, because there is a longer correct notification

console.log(solution("And now here is my secret", 15)); // And now ...
console.log(solution("There is an animal with your legs", 15)); // There is an ...
console.log(solution("super dogs", 4)); // ...
console.log(solution("how are you", 20)); // how are you
// console.log(['And', 'now', '...'].join(' '))
