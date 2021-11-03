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
    if (container[i][0] && first === null && !nextSet) {
      first = container[i][1];
    } else if (container[i][0] && second === null && !nextSet) {
      second = container[i][1];
      nextSet = true;
    } else {
      if (container[i][0] && nextSet) {
      first = container[i][1];
      } else if (container[i][0] && nextSet) {
      second = container[i][1];
      }
    }
  }
  console.log('first: ' + first, second)
  if (first === second) {
    return first || second;
  } else {
    return Math.floor((second - first) / 2) + first;
  }
}