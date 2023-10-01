// using other than JS array

const stack = {};
let count = 0;

const push = (item) => {
  stack[count] = item;
  count += 1;
};

const pop = () => {
  // eslint-disable-next-line prefer-destructuring
  const result = stack[count - 1];
  delete stack[count - 1];
  count -= 1;
  return result;
};

const peek = () => stack[count - 1];

const length = () => count;

// examples
push(1);
push(2);
push(3);
console.log(peek());  // 3
console.log(pop());  // 3
console.log(length());  // 2
