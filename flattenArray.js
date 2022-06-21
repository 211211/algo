function flattenArray(arr) {
    const result = []
    if (!Array.isArray(arr)) {
        return -1 // invalid input
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (Array.isArray(element)) {
            const subResult = flattenArray(element)
            while(subResult.length) {
                result.push(subResult.shift())
            }
        } else {
            result.push(element)
        }
    }

    return result
}

const nestedArray = [1, 2, 3, [4, 5], [6, [5, [0]]], 44, ["some string", [[[10], 11], [12, [13]]], 4.9]];
console.log(flattenArray(nestedArray));
