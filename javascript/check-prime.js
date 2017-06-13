
var determinePrime = function (n) {
  // start at 2, since integer divisible by 1 is ok for prime
  // This will run in O(n) time since we have to iterate at most n times
  for (var i = 2; i < n; i++) {
    if (n % i == 0){
      break;
    }
  }

  if (i === n) {
    return true;
  }
  return false;
}

console.log(determinePrime(5));
console.log(determinePrime(25));
console.log(determinePrime(40));
console.log(determinePrime(13));

// Another simpler implementation. Mod tells you if there is a leftover ,so if it's 0 then you know that k is divisuble by i
function isPrime(k) {
  for (var i = 2; i < k; i++) {
    if (k % i === 0) {
      return false
    }
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(15));
console.log(isPrime(23));
