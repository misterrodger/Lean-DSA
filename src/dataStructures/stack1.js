// using JS array

const stack = [];

const push = (item) => stack.push(item);

const pop = () => stack.pop();

const peek = () => stack[stack.length - 1];

const length = () => stack.length;


// examples
push(1);
push(2);
push(3);
console.log(peek());  // 3
console.log(pop());  // 3
console.log(length());  // 2
