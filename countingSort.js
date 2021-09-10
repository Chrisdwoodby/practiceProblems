var countingSort = function(arr) {
  // Write your code here
  var freqArr = [];
  freqArr.length = 100;
  for (var i = 0; i < freqArr.length; i++) {
    freqArr[i] = 0;
  }
  for (var i = 0; i < arr.length; i++) {
    if (freqArr[arr[i]] === 0) {
      freqArr[arr[i]] = 1;
    } else {
      freqArr[arr[i]] ++;
    }
  }
  return freqArr;
};


console.log(countingSort([1, 1, 3, 2, 1]))