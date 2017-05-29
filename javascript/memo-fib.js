var memo = {};
function memoFib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
     return 1;
  }
  if (!memo[n]) {
    memo[n] = memoFib(n-1) + memoFib(n-2);
  }
  return memo[n];
}

console.log(memoFib(5));
