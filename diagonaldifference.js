// function lonelyinteger(a) {
//     // Write your code here
//   var tracker = {};
//   for (var i = 0; i < a.length; i++) {
//     if (!tracker[a[i]]) {
//       tracker[a[i]] = 1;
//     } else if (tracker[a[i]]) {
//       tracker[a[i]] ++;
//     }
//   }
//   for (var key in tracker) {
//     if (tracker[key] === 1) {
//       return key
//     }
//   }
// }


// console.log(lonelyinteger([1, 1, 2, 2, 3, 3, 4]))

function diagonalDifference(arr) {
    // Write your code here
  var left = 0;
  var leftSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (left !== arr.length) {
      leftSum += arr[i][left];
      left ++
    }
  }
  var right = arr.length - 1;
  var rightSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (right !== -1) {
      console.log(arr[i][right])
      rightSum += arr[i][right];
      right --
    }
  }
  return Math.abs(leftSum - rightSum);
}


var matrix = [
[1, 2, 3],
[4, 5, 6],
[9, 8, 9]
]
console.log(diagonalDifference(matrix))
