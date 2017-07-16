var encode = function(strs) {
    var output = '';
    for (var i = 0; i < strs.length; i++) {
      if (i === strs.length-1) {
        console.log(strs[i]);
        output += strs[i];
      } else {
        output += strs[i] + '_BREAK_';
      }
    }
  console.log(output);
    return output;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  console.log(s);
  if (!s) return [];
  return s.split('_BREAK_');
};

var hey = encode(['hi','there']);
console.log(hey);
console.log(decode(hey));
decode(hey);

var hey = encode([]);
console.log(hey);
console.log(decode(hey));
decode(hey);

console.log('omg');
var hey = encode([""]);
console.log(hey);
console.log(decode(hey));
decode(hey);
