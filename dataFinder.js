function dataFinder(data) {
  // Write your code here
  var find = function(minRange, maxRange, value) {
    if (minRange <= value && maxRange <= value) {
      return true;
    } else if (minRange < 0 || maxRange > data.length) {
      return Error('Invalid range');
    }
    return false;
  }
  return find(1, 10, 13);
}

console.log(dataFinder([1, 2, 3, 4, 5]))
