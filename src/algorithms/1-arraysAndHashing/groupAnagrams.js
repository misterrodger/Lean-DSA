let anagramLookup = {};

const add = (key) => {
  const sortedKey = key.split('').sort();
  if (anagramLookup[sortedKey]) {
    anagramLookup[sortedKey] = [...anagramLookup[sortedKey], key];
  } else {
    anagramLookup[sortedKey] = [key];
  }
};

function groupAnagrams(arr) {
  anagramLookup = {};
  arr.forEach(each => add(each));
  return Object.values(anagramLookup);
}

// Input: strs = ["eat","tea","tan","ate","nat","bat"]  to nested arrs
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]  in any order

console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));
console.log(groupAnagrams(['']));
