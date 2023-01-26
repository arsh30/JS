// program to find the factors of an integer
// factors -> eg: 12 ->  factor of 12 are 2,4,and 6
// means jo divide krdega

function factor(n) {
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}

factor(18);