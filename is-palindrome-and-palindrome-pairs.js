function isPalindrome(str) {
  var chars = str.split('');
  var charsLength = chars.length;
  var indexCheck = Math.floor(charsLength/2);
  var checkPalindrome = false;
  for (var i = 0; i < indexCheck; i++) {
    if (chars[i] === chars[charsLength - i - 1]) {
      checkPalindrome = true;
    } else {
      return false;
    }
  }
  return checkPalindrome;
}
/*
console.log(isPalindrome('aa'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('ab'));
console.log(isPalindrome('aba'));*/
console.log(isPalindrome('batbat'));

// find all pairs in array that result in a palindrome
// input : arr of strings
// output: arr of pair indices that result in palindrone

/*
  for each string in array
    for each subsequent string in array
      concat arr[i] + arr[j]
      determine if concatenated string is palindrone
      if so, add [i,j] to result list
    end
  end
  return result list

  horrible run time - basically go through potentially worse than O(n^3) runtime since last palindrome check is dependent on string length
*/

/* updated:
- what do we want to check?
- at each iteration of array, we can insert this into a hashmap where the value associated to the key is what would make it a palindrome. So preprocess array:

Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]

// if length is odd
// preprocess array
'bat' -> {'idx': 0, strs: ['tab']}
'tab' -> {'idx': 1, strs: ['bat']}
'cat' -> {'idx' : 2, strs: ['tac']}
// if length is even, store two strings:
'ab' -> strs: ['a', 'ba']
  first string: var newStr = str.slice(0, Math.floor(str.length -1 /2))
                newStr.split('').reverse().join('');
  second string: newStr.split('').reverse().join('');

Then, after preprocessing you should have your hasmap with indices and array
with opposite stored

after which, you can go through the array list:
- get the value for the hasmap
- get array of strings
- go through array of strings
- if array of strings in hasmap, set up pair and add to result list

Runtime:
O(n^2) for going through array and splitting/reversing
O(n^2) for lookup in hashmap and potentially O(n) lookup again within list
*/

function getPalindromePairs(arr) {
  var length = arr.length;
  var result = [];
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      var str = arr[i] + arr[j];
      if (isPalindrome(str)) {
        result.push([i,j]);
      }
    }
  }
  return result;
}

console.log(getPalindromePairs(["bat", "tab", "cat"]));
