
// function longestConsecutive(arr) {
//   let results = [];
//   let subset = [];

//   arr.sort((a, b) => a - b);

//   arr.forEach((each, i) => {
//     if (each + 1 === arr[i + 1]) {
//       subset.push(each);
//     } else if (subset.length > 0) {
//       subset.push(each);
//       results = subset.length > results.length ? subset : results;
//       subset = [];
//     }
//   });
//   return results;
// }

function longestConsecutive(arr) {
  const hash = [];

  hash.push([arr[0]]);

  for (let i = 1; i < arr.length; i++) {
    hash.forEach((each, index) => {
      if (each.includes(arr[i] + 1) || each.includes(arr[i] - 1)) {
        hash[index].push(arr[i]);
      } else {
        hash.push([arr[i]]);
      }
    });
  }
  return hash;
}

console.log(longestConsecutive([100,4,200,1,3,2]));
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
