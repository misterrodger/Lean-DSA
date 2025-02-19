function maxArea(arr) {
  let left = 0;
  let right = arr.length - 1;
  let total = 0;

  while (left < right) {
    console.log({left, right, total})
    const width = right - left;
    const area = width * Math.min(arr[left], arr[right]);

    if (area > total) {
      total = area;
    }

    if (left < right ) {
      left++;
    } else {
      right--;
    }
  }

  return total;
}

const arr = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(arr));
console.log(maxArea([8,7,2,1]));
