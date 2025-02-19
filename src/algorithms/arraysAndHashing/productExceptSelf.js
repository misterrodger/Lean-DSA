function productExceptSelf(arr) {
  const result = [];

  arr.forEach((each, index) => {
    const tempArr = [...arr];
    tempArr.splice(index, 1);

    const sum = tempArr.reduce((acc, curr) => acc * curr);

    result.push(sum);
  });
  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));

function productExceptSelf2(arr) {
  const sum = arr.reduce((acc, curr) => acc * curr);

  return arr.map((each, index) => sum / arr[index]);
}

console.log(productExceptSelf2([1, 2, 3, 4]));

function productExceptSelf3(arr) {
  const sum = arr.reduce((acc, curr) => acc * curr);

  return arr.map((each, index) => {
    if (each === 0) {
      const temp = [...arr];
      temp.splice(index, 1);
      return temp.reduce((acc, curr) => acc * curr);

    } else {
      return sum / arr[index];
    }
  });
}
console.log(productExceptSelf3([-1,1,0,-3,3]));  // 0 0 9 0 0