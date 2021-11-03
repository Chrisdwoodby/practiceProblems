const interview = function(street, req) {

  var container = [];

  for (var i = 0; i < street.length; i++) {
    for (var keys in street[i]) {
      container.push([street[i][keys], i])
    }
  }
  var first = null;
  var second = null;
  var nextSet = false;
  for (var i = 0; i < container.length; i++) {
    if (container[i][0] && first === null || container[i][0] && second !== null && nextSet === true) {
      first = container[i][1];
    }
    if (container[i][0] && second === null || container[i][0] && first !== null) {
      second = container[i][1];
      nextSet = true;
    }
  }
  console.log(first, second)
  if (first === second) {
    return first || second;
  } else {
    return Math.floor((second - first) / 2) + first;
  }
}
