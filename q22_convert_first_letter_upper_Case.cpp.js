const strs = "dynamic coding with amit";

// function upperCaseCharacter(str) {
//   // console.log(strs);
//   // console.log(str.split(" "));
//   const words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//   }
//   return words.join(" ");
// }

function upperCase(str) {
  var newStr = str.split(" ");
  var newArr = newStr.map((elem) => {
    return elem.charAt(0).toUpperCase() + elem.slice(1);
  });
  return newArr.join(" ");
}

console.log(upperCase(strs));
// let str = "hello world";
// str.
