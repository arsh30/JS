function primeNumber(n) {
  if (n <= 1) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

if (primeNumber(14)) {
  console.log("prime nUMBER");
} else {
  console.log("Not a prime number");
}
