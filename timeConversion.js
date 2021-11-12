function timeConversion(s) {
    // Write your code here
  // input = conventional time "string"
  // output = military time w/o pm or am attached "string"

  // create a variable and assign to the last to characters of the input

  var copy = s.slice()
  var timeOfDay = copy.slice(copy.length - 2, s.length)
  if (timeOfDay === 'AM' && copy.slice(0, 2) === '12:00:00') {
    return '00:00:00'
  }
  if (timeOfDay === 'AM' && copy.slice(0, 2) === '12') {
    return '00' + copy.slice(2, copy.length - 2);
  }
  // if the variable is pm add 12 to the first 2 digits
  if (timeOfDay === 'PM' && copy.slice(0, 2) !== '12') {
    var hours = parseInt(copy.slice(0, 2)) + 12;
    copy = copy.replace(s.slice(0, 2), hours)
    return copy.slice(0, copy.length - 2);
  } else {
    return copy.slice(0, copy.length - 2);
  }
}

console.log(timeConversion('12:07:45AM'))
