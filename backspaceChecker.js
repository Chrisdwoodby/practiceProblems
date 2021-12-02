var backspaceCompare = function(s, t) {
  var sStack = [];
  var tStack = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      sStack.pop();
    } else {
      sStack.push(s[i])
    }
  }
  for (var i = 0; i < t.length; i++) {
    if (t[i] === '#') {
      tStack.pop();
    } else {
      tStack.push(t[i]);
    }
  }
  if (tStack.join('') === sStack.join('')) {
    return 1;
  } 
  return 0;
};

console.log(backspaceCompare('yfc#', 'yy#k#pp##'))
