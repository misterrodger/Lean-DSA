
function search(arr, target) {
  let left = 0;
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    console.log('mid: ', mid);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid -1
    } 
  }
  return -1;
}

console.log(search([-1,0,3,5,9,12], 9));
