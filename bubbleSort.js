var bubbleSort = function(array) {
  var temp;
  var swap = true;
  while (swap === true) {
    swap = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        swap = true;
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort([5, 4, 3, 2, 1]))