// using other than JS array

const stack = {};
let count = 0;

const push = (item) => {
  stack[count] = item;
  count += 1;
};

const pop = () => {
  const result = stack[count - 1];
  delete stack[count - 1];
  count -= 1;
  return result;
};

const peek = () => stack[count - 1];

const length = () => count;
