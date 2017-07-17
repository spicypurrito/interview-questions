/* Runtime: O(n*n!) since we generate n calls recursively first, where n = str length, then n-1 for each subsequent call ... so
O(n) calls
n-1; n-1; n-1 calls
n-2 n-2 n-2 calls
etc
See CTCI pg 51 for the runtime explanation as well
*/
function perms(prefix, str) {
  var chars = str.split('');
  if (str.length === 0) {
    console.log(prefix + str);
    return;
  } else {
    for (var i = 0; i < chars.length; i++) {
      perms(prefix + chars[i], str.substring(0, i) + str.substring(i+1, str.length));
    }
  }
}

console.log("Perms: ");
perms('', 'abc');
