// find intersection of 2 arrrays

let arr1 = [2, 9, 5, 8, 4, 4, 4];
let arr2 = [4, 8, 6, 9, 12];

/*
let intersectionArr = arr1.filter((elem) => {
  return arr2.includes(elem);
});

console.log([...new Set(intersectionArr)]);
*/

// Find Union of 2 arrays

var unionarr = [...arr1, ...arr2];
console.log([...new Set(unionarr)]);
