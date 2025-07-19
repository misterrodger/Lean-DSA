function getSubsets(nums) {
  const result = [];

  const backTrack = (start, subset) => {
    result.push([...subset]);

    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backTrack(i + 1, subset);
      subset.pop()
    }

  }

  backTrack(0, []);

  return result
}

console.log(getSubsets([1, 2, 3]));

// [
//   [],       [ 1 ],
//   [ 1, 2 ], [ 1, 2, 3 ],
//   [ 1, 3 ], [ 2 ],
//   [ 2, 3 ], [ 3 ]
// ]