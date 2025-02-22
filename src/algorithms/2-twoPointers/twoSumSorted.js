function twoSumSorted(arr, target) {
  const hash = {}
  let result;

  for (let i = 0; i < arr.length; i++) {
    const hashArr = Object.keys(hash);

    const resultIndex = hashArr.findIndex(each => Number(each) + arr[i] === target)

    if (resultIndex >= 0) {
      result = resultIndex
      return [i]
    } else {
      hash[arr[i]] = {index: i}
    }
  }
}

console.log(twoSumSorted([2, 7, 11, 15], 9));