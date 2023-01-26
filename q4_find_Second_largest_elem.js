/*
Approach ->
1) find largest element in the array
2) find index of the largest value
3) delete index from the array using splice methdo
4) again apply same logic that use to find the largest value

*/
const arr = [1, 2, 3, 4, 5, 6, 7, 90, 86];
function secondLargest(arr) {
  let maxi = Math.max(...arr);
  //   console.log(maxi);

  const indexOfMaxElem = arr.indexOf(maxi);
  //   console.log(indexOfMaxElem);

  // delete elem using the splice method
  arr.splice(indexOfMaxElem, 1);

  // now agin find the maximum , toh voi hoga jo chaiye
  let secondLargestValue = Math.max(...arr);
  console.log(secondLargestValue);
}

secondLargest(arr);
// second largest is 86
