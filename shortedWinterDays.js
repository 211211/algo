const shortedWinterDays = (T) => {
  console.log('input: ', T); // for debugging
  const originT = [...T]; // for debugging
  const prefixMaxT = [T[0]];
  for (let i = 1; i < T.length; i++) {
    let currentValue = T[i];
    let previousMaxValue = prefixMaxT[i - 1];
    if (currentValue > previousMaxValue) {
      prefixMaxT[i] = currentValue;
    } else {
      prefixMaxT[i] = previousMaxValue;
    }
  }

  const reversedT = T.reverse();
  const suffixMinT = [reversedT[0]];
  for (let i = 1; i < reversedT.length; i++) {
    let currentValue = reversedT[i];
    let previousValue = suffixMinT[i - 1];

    if (currentValue < previousValue) {
      suffixMinT[i] = currentValue;
    } else {
      suffixMinT[i] = previousValue;
    }
  }

  console.log({
    prefixMaxT,
    suffixMinT: suffixMinT.reverse(),
  })

  let result = -1; // not found
  for (let i = 0; i < originT.length; i++) {
      // max(left) < min(right)
      // kiếm một số lớn hơn tất cả bên trái và nhỏ hơn tất cả bên phải
      if (prefixMaxT[i - 1] < suffixMinT[i] && originT[i] > prefixMaxT[i - 1]) {
          result = i;
          return originT.filter((item, i) => i < result)
      }
  }

  return -1
};

console.log(shortedWinterDays([5, -2, 3, 8, 6]));
console.log(shortedWinterDays([-5, -5, -5, -42, 6, 12]));














// java: https://stackoverflow.com/questions/46689119/finding-array-partition-where-maxleft-minright-possible-in-on-time

// public static void main(String[] args) {

//     int[] A = {4, 3, 2, 5, 8, 6, 7};
//     //int[] A = {-3, -2, 3, 4, 6};
//     int n = A.length; 
//     System.out.println(FindElement(A, n));

// }

// static int FindElement(int[] A, int n) 
// { 
//     // Create an array 'SE[]' that will  
//     // store smaller element on right side. 
//     int[] SE = new int[n]; 

//     // Create an another array 'GE[]' that  
//     // will store greatest element on left side. 
//     int[] GE = new int[n]; 

//     // initialize first and last index of SE[], GE[] 
//     GE[0] = A[0]; 
//     SE[n - 1] = A[n - 1]; 

//     // store greatest element from left to right 
//     for (int i = 1; i < n; i++)  
//     { 
//         if (GE[i - 1] < A[i]) 
//             GE[i] = A[i]; 
//         else
//             GE[i] = GE[i - 1]; 
//     } 

//     // store smallest element from right to left 
//     for (int i = n - 2; i >= 0; i--)  
//     { 
//         if (A[i] < SE[i + 1]) 
//             SE[i] = A[i]; 
//         else
//             SE[i] = SE[i + 1]; 
//     } 

//     // Now find a number which is greater then all 
//     // elements at it's left and smaller the all 
//     // then elements to it's right 
//     for (int j = 0; j < n; j++)  
//     { 
//         if (j == 0) {
//             if (A[j] < SE[j + 1])
//             return j+1;
//         } else if(j == n - 1) {
//             if(A[j] > GE[j - 1]) {
//                 return j;
//             }
//         } else if(GE[j - 1] < SE[j] && A[j] > GE[j - 1]) {
//             return j;
//         }           

//     } 

//     return -1; 
// }