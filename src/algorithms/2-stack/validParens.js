

const isValid = (str) => {
  const stack = [];

  const opening = ['(', '{', '['];
  const closing = [')', '}', ']'];

  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  }

for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const stackTop = stack.at(-1);

    if (opening.includes(current)) {
      stack.push(current)
    } else if (closing.includes(current)) {
      if (pairs[current] === stackTop) {
        stack.pop()
      } else {
        return false;
      }
    }
  }
  return stack.length === 0
}

// console.log(isValid('()[]{}'));  // true
// console.log(isValid('['));  // false
console.log(isValid('{[]}'));  // true

