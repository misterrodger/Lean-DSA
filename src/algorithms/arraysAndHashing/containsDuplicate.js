// using JS array methods.  checks whole array
const containsDuplicate = (arr) =>
  arr.some((each, index, arr) => index !== arr.lastIndexOf(each));

// recursion, short-circuits
const containsDuplicate2 = (arr, index = 0) =>
  index !== arr.lastIndexOf(arr[index])
    ? true
    : containsDuplicate2(arr, index += 1);

console.log(containsDuplicate([1,2,3,1]));  // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2])); // true

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
