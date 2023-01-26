function checkPalindrome(str) {
  str = str.toLowerCase();

  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(checkPalindrome("Madam"));

// let str = "arsh";
// console.log(str.length);
