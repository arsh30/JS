function reverse(str) {
    const strToArr = str.split(""); // sare chracter hojege
    const reverseArr = strToArr.reverse();
    const reversedStr = reverseArr.join(""); // note jo bhi empty string ke andr dalege
    // toh vo bhi add hojayega har elem ke baad
    


    return reversedStr;

}

console.log(reverse("arshdeep"));
