// return bool: true if a number
function isNumber(str) {
    var chars = str.split('');
    var validNumber = {
        '0' : '1',
        '1' : '1'
        ...
        '9': '1'
    };
    if (chars[0] === '+' || chars[0] === '-') {
       chars = chars.splice(0,1); // remove first char in array
    }
    var hasSeenDecimal = false;
    for (var i = 0; i < chars.length; i++) {
        // validate number or not
        if (!validNumber[chars[i]]) {
            // decimal validation
            if (chars[i] === '.' && !hasSeenDecimal) {
                hasSeenDecimal = true;
                continue;
            } else {
                return false;
            }
            return false;
        }
    }
    return true;
}

// Use cases
/*
Normal integer: 1
Negative: '-' beginning of array
Positive: '+' beginning of array
Decimal: '.' only be seen once with the string
Not good: 25.25.
*/




/**
 * Sample input:
 *
 *          1
 *         / \
 *        3   5
 *       /   / \
 *      2   4   7
 *     / \   \
 *    9   6   8

 *
 * Expected output:
 *    1
 *    3 5
 *    2 4 7
 *    9 6 8
 *    ==========


 *
 *          1
 *         / \
 *        3   5
 *       /   / \
 *      2   4   7
 *     / \
 *    9   6

 */


 // node has left, right, and value
 function printTree(root) {
     var q = [];
     q.push(root);

     var depth = 0;
     var numNodes = 0;
     var maxNodes = 2^depth;

     while(q.length) {
         var node = q.shift();
         console.log(node.value);

         numNodes++;
         if (numNodes === maxNodes) {
             depth++;
             maxNodes = 2^depth;
             console.log('\n');
         }

         if (node.left !== null) {
             q.push(node.left);
         }

         if (node.right !== null) {
             q.push(node.right);
         }
     }
 }

 function printTree2(root) {
     var q1 = [];
     var q2 = [];

     q1.push(root);
     var currentQueue = q1; // pointer to the queue

     while(q1.length || q2.length) {
       var node = currentQueue.shift();
       console.log(node.value);
       if (currentQueue.length === 0) {
         // switch current queue
         currentQueue = (currentQueue === q1) ? q2 : q1;
         console.log('\n');
       }
       if (node.left === null) {
         currentQueue.push(node.left);
       }
       if (node.right === null) {
         currentQueue.push(node.right);
       }
     }
 }

 /*
 // depth; number of nodes have seen; max number of nodes per level
 // 0 | x | 2^depth
 */


 // constructor: takes list of words
 // method takes two words, returns the shortest distance between the words in the list
 //

 var words = {"foo", "bar", "cat", "rat", "dog", "cat"}
 // bar, bar: distance = 0
 // bar, cat: distance = 1
 // cat, dog: distance = 1

 function distance(word1, word2) {

 }


 var WordDistance = function (words) {
   this.wordMap = {};
   for (var i = 0; i < words.length; i++) {
     var word = words[i];
     if (!this.wordMap[word]) {
         this.wordMap[word] = [];
     }
     this.wordMap[word].push(i);
   }
   // preprocess to put into hash map with key = word ; value = arr of indexes
 }

 WordDistance.prototype.distance(word1, word2) {
   // get hashmap
   // get keys in hashmap
   // for larger index arr
   // calculate distance against smaller index arr
   // return min
   var indices1 = this.wordMap[word1];
   var indices2 = this.wordMap[word2];

   if (indices1.length >== indices2.length) {
     return this.calcMin(indices1, indices2);
   }
   return this.calcMin(incides2, indices1);
 }

 WordDistance.prototype.calcMin(arr1, arr2) {
     if (!arr1.length || !arr2.length) {
       return -1; // no distance to calc for a word
     }
     var min = Math.abs(arr1[0] - arr2[0]);
     for (var i =0; i < arr1.length; i++) {
       for (var j = 0; j < arr2.length; j++) {
         var calculatedDistance = Math.abs(arr1[i] - arr2[j]);
         if (calculatedDistance < min) {
           min = calculatedDistance;
         }
       }
     }
     return min;
 }
