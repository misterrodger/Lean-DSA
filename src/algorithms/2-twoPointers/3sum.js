function getZeroSum(arr) {
  return arr.filter(each => {
    const isZero = each.reduce((acc, curr) => acc + curr) === 0
    return isZero
  })
}

function getCombinations(arr) {
  const result = []

  for (let x = 0; x < arr.length; x++) {
    for (let y = x + 1; y < arr.length; y++) {
      for (let j = x + 2; j < arr.length; j++) {

        result.push([arr[x], arr[y], arr[j]])
      }
    }
  }
  return result;
}

function threeSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b)

  return getZeroSum(getCombinations(sortedArr))
}

// all sums of 3 that total 0
console.log(threeSum([-1, 0, 1, 2, -1, -4]));