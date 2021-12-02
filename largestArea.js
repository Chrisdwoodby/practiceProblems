function largestArea(samples) {
  // Write your code here
  if (!samples || samples.length === 0) {
    return 0;
  }
  var matrix = samples.slice();
  var max = Math.max(...samples[0]);
  for (var i = 0; i < samples.length; i++) {
    max = Math.max(samples[i][0], max);
  }
  for (var i = 1; i < samples.length; i++) {
    for (var j = 0; j < samples[0].length; j++) {
      if (samples[i][j] === 0) {
        continue;
      }
      matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) + 1;
      if (matrix[i][j] > max) {
        max = matrix[i][j]
      }
    }
  }
  return max
}


console.log(maximalSquare([[1, 1, 0], [1, 1, 0], [1, 0, 0]]))
