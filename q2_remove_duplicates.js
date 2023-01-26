let arr = [1, 1, 1, 2, 2, 23, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9];
const removeDuplicate = arr.filter((elem, index, arr) => {
  return arr.indexOf(elem) === index;
});

console.log(removeDuplicate);
