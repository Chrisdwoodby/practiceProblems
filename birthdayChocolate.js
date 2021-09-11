var birthday = function(s, d, m) {
  // Write your code here
  var numOfWaySplit = 0;
  for (var i = 0; i < s.length; i++) {
    var total = 0;
    var segment = s.slice(i, i + m);
    for (var j = 0; j < segment.length; j++) {
      total += segment[j];
    }
    if (total === d) {
      numOfWaySplit ++;
    }
  }
  return numOfWaySplit;
};

console.log(birthday([2, 2, 1, 3, 2], 4, 2))