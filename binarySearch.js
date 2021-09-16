var binarySearch = function(array, target, start, end) {
  start = start || 0;
  end = end || array.length;
  let mid = Math.floor((end - start) / 2) + start;
  if (array[mid] === target) return mid;
  if (array[mid] > target) {
    return binarySearch(array, target, start, mid);
  }
  return binarySearch(array, target, mid, end);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7))

