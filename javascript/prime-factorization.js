function isPrime(k) {
  if (k === 0 || k === 1) return false;
  for (var i = 2; i < k; i++) {
    if (k % i === 0) {
      return false
    }
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(15));
console.log(isPrime(23));

function getPrimeFactorization(k) {
  var list = [];
  primeFactorization(k, list);
  console.log('prime factorization of ' + k);
  console.log(list);
}

function primeFactorization(k, primeList) {
  var primeIdx = null;
  for (var i = 0; i <= k; i++) {
    if (isPrime(i) && k % i === 0) {
      // add prime to list
      primeList.push(i);
      primeIdx = i;
      break;
    }
  }
  if (primeIdx) {
    primeFactorization(k/primeIdx, primeList);
  }
}

getPrimeFactorization(12);
getPrimeFactorization(24);
