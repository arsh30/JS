/* 
function checkVowel(str) {
    str = str.toLowerCase();
    if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
        console.log(`${str} is vowel`);
    } else {
        console.log(`${str} is Not a vowel`);
    }
}

checkVowel("A");

*/

// SECOND QUESTION -> FIND TOTAL COUNT OF VOWELS IN A STRING

function checkVowel(str) {
  str = str.toLowerCase();
 
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;
        }
    }
    console.log(count);
}

checkVowel("Javascript Interview series");
