function isPalindrome(str) {
  // go through str length
  var chars = str.split('');
  var length = chars.length;
  var toLength = Math.floor(chars.length/2);
  var isAPalindrome = false;
  for(var i = 0; i < toLength; i++) {
    if (chars[i] === chars[length - i - 1]) {
      isAPalindrome = true;
    } else {
      return false;
    }
  }
  return isAPalindrome;
}

console.log(isPalindrome('aba'));
console.log(isPalindrome('ac'));
console.log(isPalindrome(''));
console.log(isPalindrome('abba'));

// list of words
// function to find pairs of words for each pair ; concat word one by one they form palindrome
// ['cat', 'dog', 'tac']
// [['cat', 'tac'], ['tac', 'cat']]
/* ['a'] => [['a','a']] => 'aa'

*/

function findPalindromePairs(arr) {
  var length = arr.length;
  var result = [];
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      if (i !== j) {
        var concatenatedString = arr[i] + arr[j];
        if (isPalindrome(concatenatedString)) {
          result.push([arr[i], arr[j]]);
        }
      }
    }
  }
  return result;
}

// O(n*n*(length of string))
console.log(findPalindromePairs(['cat', 'dog', 'tac']));
console.log(findPalindromePairs([]));
console.log(findPalindromePairs(['a']));

// number of words is 1mill ; assumption: length of each word avg is very small
// 5-10 characters
// word = cat
// search for tac
// preprocess arr such that i have a hashmap from
// key = 'cat' ; value = {idx: 1, strs : ['tac', 'ac']}  // list of reversed strings depending on string length
// for each word in arr
// calculate reverse, get list of strings in hashmap
// if idx !== found value in map, then return found str
// O(n*lengthOfString) // storage of O(n)

/*
  map = key = 'cat' ; value = {idx: 1, strs : ['tac', 'ac']}

  tac
  // calculate reverse => cat O(m)
  // constant time lookup into map : cat
  // for each strs in cat value O(2) => O(1)
  //
*/

// aapha -> reverse -> ahpaa -> ['a','ah', 'ahp', 'ahpa', 'ahpaa']
// 'ahp'

// {'ahp': 1, 'aapha': 2}
// current_word: aapha => [aa pha, a apha, aap ha, aaph a]

// pre processing
/*
  store each key = word; value = idx

  // get pairs
  - for each word
  -- firstTempString = '';
  -- secondTempString
  -- firstTempString = str.slice(i, numCharacters);
  -- secondTempString = str.slice(nu..);
  -- if (map[secondTempString] >= 0) {
        if (map[secondTempString] !== currentIdx) {
          if isPalindrome(firstTempString) {
            // add to result list
          }
        }
      }
*/

// prefixMap = { key = 'a', 'ah'

// input: ['ahp', 'aapha'] => ?

// ahp -> ahpaapha
// * -> a -> h -> p -> a -> a -> *
//   -> p -> h -> a -> *

// for each word
// get each character and find in trie
// a -> h -> p -> a -> a -> *
// retrieve list of words from trie with the prefix = str
// if isPalindrome(str + wordFromTrie) then add to result

// remember: each word is very small
// 
