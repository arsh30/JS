const arr = [1, 2, 8, 2, 9, 8];
const duplicates = arr.filter((elem, index, arr) => {
  debugger;
  // return arr.indexOf(elem) !== index;  // -It gives duplicates elem
  return arr.indexOf(elem) === index; // -It gives unique elem in Array
  //
});

console.log(duplicates);
