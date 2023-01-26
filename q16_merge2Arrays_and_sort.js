// mege two arrays and sort them in JS

const arr1 = ["1", "8", "9"];
const arr2 = ["45", "7", "19"];

// method 1 using -> concat

const finalArr = arr1.concat(arr2);
const sortedArr = finalArr.sort((a, b) => {
  return a - b;
});

// second 2 -> using spread operator
const result = [...arr1, ...arr2];
const sortarr = result.sort((a, b) => {
  return a - b;
});

console.log(sortarr);
