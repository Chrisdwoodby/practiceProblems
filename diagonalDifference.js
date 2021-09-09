var diagonalDifference = function(arr) {
  // Write your code here
  var left = 0;
  var leftSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (left !== arr.length) {
      leftSum += arr[i][left];
      left ++;
    }
  }
  var right = arr.length - 1;
  var rightSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (right !== -1) {
      console.log(arr[i][right]);
      rightSum += arr[i][right];
      right --;
    }
  }
  return Math.abs(leftSum - rightSum);
};
