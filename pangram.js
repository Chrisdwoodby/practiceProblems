var pangrams = function(s) {
  // Write your code here
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  s = s.toLowerCase();
  for (var i = 0; i < s.length; i++) {
    if (alpha.indexOf(s[i]) !== -1) {
      alpha = alpha.split('');
      alpha.splice(alpha.indexOf(s[i]), 1);
      alpha = alpha.join('');
    }
    if (!alpha.length) {
      return 'pangram';
    }
  }
  return 'not pangram';
};

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))