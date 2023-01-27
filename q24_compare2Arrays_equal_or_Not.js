const arr1 = [2, 4, 9, 8, 4];
const arr2 = [4, 8, 6, 9, 2];
// index of method -> it return -1 if not found
// every method -> ye sare element ke liye condition check krega

let isSame = arr1.every((elem) => {
  if (arr2.indexOf(elem) > -1) {
    return (elem = [arr2.indexOf(elem)]);
  }
});

console.log(isSame);
