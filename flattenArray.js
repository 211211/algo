function flattenArray(arr) {
    const result = []

    for (let i = 0; i<arr.length;i++) {
        const element = arr[i]
        if(Array.isArray(element)) {
            const subFlatArray = flattenArray(element)
            while(subFlatArray.length) {
                result.push(subFlatArray.shift()) // O(n)
                // result.push(subFlatArray.pop()) // O(1)
            }
        } else {
            result.push(element)
        }
    }

    return result
}

const nestedArray = [1, 2, 3, [4, 5], [6, [5, 0]], 44, ["some string", [[10, 11], [12, 13]], 4.9]];
console.log(flattenArray(nestedArray));
