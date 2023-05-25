function oddNum(arr) {
  // first you make a function with a parameter
  const result = []; // result will equal a empty string

  for (let i = 0; i < arr.length; i++) {
    // Then we will make a for loop to loop thorugh our array
    if (arr[i] % 2 !== 0) result.push(arr[i]); // if the array index is divded by 2 but does not have a reminder of 0 it is an odd number
  }
  return result; // now we return our result
}

console.log(oddNum([2, 3, 4, 5, 6, 7, 8, 9])); // console log our function
