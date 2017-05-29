/*
Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// Solution is O(n^2)
function lengthOfLongestSubstring(s) {
  var length = s.length;
  var resultString = '';
  var resultStringLength = 0;

  for (var j = 0; j < length; j++) {
    var tempString = '';
    var tempStringLength = 0;
    for (var i = j; i < length; i++) {
      var currentChar = s.charAt(i);
      if (tempString.indexOf(currentChar) < 0) {
        tempString += currentChar;
        tempStringLength++;
      } else {
        break;
      }
    }

    if (tempStringLength >= resultStringLength) {
      resultString = tempString;
      resultStringLength = tempStringLength;
    }
  }

  console.log(resultString + ',' + resultStringLength);
}


lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbbbbb');
lengthOfLongestSubstring('pwwkew');
lengthOfLongestSubstring('c');
lengthOfLongestSubstring('aab');
lengthOfLongestSubstring('pwwkew');
