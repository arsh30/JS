// find factorial of n

function factorial(n) {
  let fact = 1;
  if (n < 0) {
    return;
  }
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

factorial(5);
