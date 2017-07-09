// Fizzzzbuzzzzz of n

function fizzbuzz(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
      continue;
    }
    if (i % 3 === 0) {
      console.log('Fizz');
      continue;
    }
    if (i % 5 === 0) {
      console.log ('Buzz');
      continue;
    }
    console.log(i);
  }
}

fizzbuzz(15);
