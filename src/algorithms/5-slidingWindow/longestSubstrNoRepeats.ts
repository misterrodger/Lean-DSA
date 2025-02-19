function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let curr: string[] = [];

  s.split('').forEach(each => {
    if (curr.includes(each)) {
      if (curr.length > maxLength) {
        maxLength = curr.length
      }
      curr = [each];
    } else {
      curr.push(each)
    }
  })

  return maxLength    
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(' '))
