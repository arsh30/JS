// const arr = [1, 2, 3, 4, 5, 67];

function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

max((arr = [1, 2, 3, 4, 5, 67]));
