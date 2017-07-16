/**
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function(s) {
    var map = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    var chars = s.split('');
    var calculated = 0;
    for (var i = 0; i < chars.length; i++) {
      var currentInt = map[chars[i]];
      if (currentInt > calculated) {
        calculated = Math.abs(currentInt - calculated);
      } else {
        calculated = currentInt + calculated;
      }
    }
    return calculated;
};

var romanToInt = function(s) {
    var map = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    var chars = s.split('');
    var prevInt = map[chars[0]];
    var calculated = 0;
    for (var i = 0; i < chars.length; i++) {
      var currentInt = map[chars[i]];
      if (currentInt > prevInt) {
        calculated = calculated + (currentInt - (2*prevInt));
      } else {
        calculated = calculated + currentInt;
      }
      prevInt = currentInt;
    }

    return calculated;
};


console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('XXX'));
console.log(romanToInt('XXXI'));
console.log(romanToInt('CDLI'));
console.log(romanToInt('MCMXCVI'));
