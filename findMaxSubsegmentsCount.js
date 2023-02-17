// function findMaxSubsegmentsCount(arr) {
//   let n = arr.length;

//   let hauToNhoNhat = Array(n + 1).fill(0);
//   hauToNhoNhat[n] = Infinity;
//   for (let i = n - 1; i >= 0; i--) {
//     hauToNhoNhat[i] = Math.min(hauToNhoNhat[i + 1], arr[i]);
//   }

//   let tienToLonNhat = -1;
//   let res = 0;
//   for (let i = 0; i < n; i++) {
//     let val = arr[i];
//     tienToLonNhat = Math.max(tienToLonNhat, val);
//     if (tienToLonNhat <= hauToNhoNhat[i + 1]) {
//       res += 1;
//     }
//   }

//   return res;
// }

function findMaxSubsegmentsCount(arr) {
  let n = arr.length;

  // O(n)
  let hauToNhoNhat = Array(n + 1).fill(0);
  hauToNhoNhat[n] = Infinity;
  // O(n)
  for (let i = n - 1; i >= 0; i--) {
    let min = hauToNhoNhat[i + 1];
    let arr_i = arr[i];
    let min_or_arr_i = (arr_i < min) ? arr_i : min;
    hauToNhoNhat[i] = min_or_arr_i;
  }

  console.log({hauToNhoNhat})

  let tienToLonNhat = -Infinity;
  let res = 0;
  // O(n)
  for (let i = 0; i < n; i++) {
    let val = arr[i];
    tienToLonNhat = (val > tienToLonNhat) ? val : tienToLonNhat;
    if (tienToLonNhat <= hauToNhoNhat[i + 1]) {
      res += 1;
    }
  }

  // O(n + n + n) = O(n)
  return res;
}

console.log(findMaxSubsegmentsCount([2, 5, 1, 9, 7, 6])); // 2
console.log(findMaxSubsegmentsCount([2, 10, 5, 9])); // 2
console.log(findMaxSubsegmentsCount([2, 1, 3, 2, 4, 4, 5, 8, 7, 7])); // 6
