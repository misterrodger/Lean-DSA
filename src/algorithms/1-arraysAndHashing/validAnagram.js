const process = (str, arr) => {
  if (str.length === 0 && arr.length === 0) return true;

  const match = arr.findIndex(each => each === str[0]);
  arr.splice(match, 1);

  return match !== -1  // note:  findIndex returns -1 which is truthy so you can't just check for 'if match'
    ? process(str.slice(1), arr)
    : false;
};

function validAnagram(str1, str2) {
  const arr2 = str2.split('');

  return process(str1, arr2);
}

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));

