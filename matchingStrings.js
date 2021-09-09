var matchingStrings = function(strings, queries) {
  // Write your code here
  // returns a new array with the # of times the queries appear in strings array
  var result = [];
  var tracker = {};

  for (var i = 0; i < queries.length; i++) {
    var count = 0;
    for (var j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j] && !tracker[queries[i]]) {
        tracker[queries[i]] = 1;
      } else if (queries[i] === strings[j] && tracker[queries[i]]) {
        tracker[queries[i]] ++;

      } else if (strings.indexOf(queries[i]) === -1) {
        tracker[queries[i]] = 0;
      }
    }
  }
  return Object.values(tracker);
};

