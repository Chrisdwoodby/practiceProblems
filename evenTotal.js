var solution = function(a, k) {
    if (k > a.length) {
      return -1;
    }
    // add k nums to index (hash map)
    // find the greatest event total of unique groups
    var container = [];
    var inner_container = [];
    while(container.length < a.length * k) {
      while (inner_container.length < k) {
        var item = a[Math.floor(Math.random() * a.length)];
        if (inner_container.indexOf(item) === -1 || a.indexOf(item) !== a.lastIndexOf(item)) {
          inner_container.push(item);
        }
      }
      if (container.indexOf(inner_container) === -1) {
        container.push(inner_container)
        inner_container = [];
      }
    }
    var evenTotal = 0;
    for (var i = 0; i < container.length; i ++) {
      var group = container[i];
      var total = 0;
      for (var j = 0; j < group.length; j += 1) {
        total += group[j];
        if (total % 2 === 0 && total > evenTotal) {
          evenTotal = total;
        }
      } 
    }
    return evenTotal;
  }
  console.log(solution([5, 6, 3, 4, 2], 5));
  console.log(solution([4, 9, 8, 2, 6], 3));
  console.log(solution([2, 3, 3, 5, 5], 3));