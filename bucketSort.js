// Pseudocode
// bucketSort(arr[], n)
// 1) Create n empty buckets (Or lists).
// 2) Do following for every array element arr[i].
// .......a) Insert arr[i] into bucket[n*array[i]]
// 3) Sort individual buckets using insertion sort.
// 4) Concatenate all sorted buckets.

function bucketSort(array, k) {
    // 1) Create n empty buckets   
    const buckets = Array.from({ length: k }, () => [])

    // 2) Put array elements in different buckets
    for (let i = 0; i < k; i++) {
        const bucketIndex = k * array[i];
        buckets[Math.floor(bucketIndex)].push(array[i])
    }

    // 3) Sort individual buckets
    for (let i = 0; i < k; i++) {
        if (buckets[i].length) {
            buckets[i].sort((a, b) => a - b)
        }
    }

    // 4) Concatenate all buckets into arr[] (in-place)
    let index = 0;
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            array[index++] = buckets[i][j];
        }
    }
}

const arr = [0.42, 0.32, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51];
bucketSort(arr, arr.length)
console.log(arr)

// Bucket Sort for numbers having integer part:
// Algorithm : 

// 1. Find maximum element and minimum of the array
// 2. Calculate the range of each bucket
//    range = (max - min) / n
//    n is the number of buckets
// 3. Create n buckets of calculated range
// 4. Scatter the array elements to these buckets
//    BucketIndex = ( arr[i] - min ) / range
// 5. Now sort each bucket individually
// 6. Gather the sorted elements from buckets to original array

// Input :    
// Unsorted array:  [ 9.8 , 0.6 , 10.1 , 1.9 , 3.07 , 3.04 , 5.0 , 8.0 , 4.8 , 7.68 ]
// No of buckets :  5

// Output :  
// Sorted array:   [ 0.6 , 1.9 , 3.04 , 3.07 , 4.8 , 5.0 , 7.68 , 8.0 , 9.8 , 10.1 ]

function bucketSortWithInteger(arr, n) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    console.log({ min, max })

    // 2. Calculate the range of each bucket
    const bucketRange = Math.floor((max - min) / n) // n is the number of buckets
    console.log({ bucketRange })
    // 3. Create n buckets of calculated range
    const buckets = Array.from({ length: n }, () => [])
    console.log({ buckets })

    // 4. Scatter the array elements to these buckets
    for (let i = 0; i < n; i++) {
        const bucketIndex = Math.floor((arr[i] - min) / bucketRange)
        console.log({ bucketIndex })

        buckets[bucketIndex + 1].push(element)
    }

    // 5. Now sort each bucket individually
    for (let i = 0; i < n; i++) {
        if (buckets[i].length) {
            buckets[i].sort((a, b) => a - b)
        }
    }

    // 6. Gather the sorted elements from buckets to original array
    let arrIndex = 0
    for (let i = 0; i < bucketArray.length; i++) {
        for (let j = 0; j < bucketArray[i].length; j++) {
            arr[arrIndex++] = bucketArray[i][j]
        }
    }
}

const arr1 = [9.8, 0.6, 10.1, 1.9, 3.07, 3.04, 5.0, 8.0, 4.8, 7.68];
bucketSortWithInteger(arr1, arr1.length)
console.log(arr1)
// bucketSort(arr1, 5)
