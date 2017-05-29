function longestPalindrome(s){
  var length = s.length;
  var longestPal = '';

  if (length === 1) {
    return s;
  }

  for (var i = 0; i < length; i++) {
    var currentString = '';
     for (var j = i; j < length; j++) {
       currentString += s.charAt(j);
       if (isPalindrome(currentString) && currentString.length > longestPal.length) {
        longestPal = currentString;
       }
     }
  }
  return longestPal;
}

function isPalindrome(str) {
  var len = str.length;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(len - 1 - i)) {
      return false;
    }
  }
  return true;
}
/*
console.log(isPalindrome('abba'));
console.log(isPalindrome('aba'));
console.log(isPalindrome('abc'));
console.log(isPalindrome('abcba'));
console.log(isPalindrome('a'));*/

console.log(longestPalindrome('bb'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abcda'));



/*
Your previous Plain Text content is preserved below:


 */
