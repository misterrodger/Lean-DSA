function combinationSum(arr, target) {
  const result = [];

  const backTrack = (start, target, subset) => {
    if (target === 0) {
      result.push([...subset]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (arr[i] > target) {
        continue;
      }
      subset.push(arr[i]);
      backTrack(i, target - arr[i], subset)
      subset.pop()
    }
  }
  backTrack(0, target, []);

  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));

// [ [ 2, 2, 3 ], [ 7 ] ]