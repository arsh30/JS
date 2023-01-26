const strs = "dynamic coding with amit";

function upperCaseCharacter(str) {
  // console.log(strs);
  // console.log(str.split(" "));
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

console.log(upperCaseCharacter(strs));
