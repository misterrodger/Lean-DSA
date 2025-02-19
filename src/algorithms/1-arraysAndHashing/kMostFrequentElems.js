let lookup = {};

const logFrequency = (arr) => arr.forEach(each => {
  // eslint-disable-next-line prefer-destructuring
  const getKey = lookup[each];
  if (getKey == undefined) {
    lookup[each] = 1;
  }
  else {
    lookup[each] += 1;
  }
});

const getKFrequent = () => {
  return Object.entries(lookup).sort((a, b) => b[1] - a[1]);
};

function topKFrequent(arr, k) {
  lookup = {};
  logFrequency(arr);

  return getKFrequent().slice(0, k).map(([result]) => Number(result));
}

console.log(topKFrequent([1,1,1,2, 2, 2, 2,3], 2));
console.log(topKFrequent([-1, -1], 1));

// TODO - instead of the sort step:
// bucket sort in the first place (have to check for empty buckets on return)
// or priority queue in the first place
// avoiding sort reduces from O (n log n) to O(n)
