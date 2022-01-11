function firstNonRepeatingLetter(s) {
    // if first index and last index of letter is the same
    // return that letter
    var tracker = {};
    var single;
    for (var i = 0; i < s.length; i++) {
      if (!tracker[s[i].toLowerCase()]) {
        tracker[s[i].toLowerCase()] = 1;
      } else {
        tracker[s[i].toLowerCase()] ++;
      }
    }
    for (var letter in tracker) {
      if (tracker[letter] === 1) {
        if (s.indexOf(letter) !== -1) {
          return letter;
        } else if (s.indexOf(letter.toUpperCase()) !== -1) {
          return letter.toUpperCase()
        }
      }
    }
    return "";
  }