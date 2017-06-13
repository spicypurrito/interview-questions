
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
