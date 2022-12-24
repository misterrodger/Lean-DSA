// using JS array

const stack = [];

const push = (item) => stack.push(item);

const pop = () => stack.pop();

const peek = () => stack.slice(-1);

const length = () => stack.length;

//
console.log(stack);
push(1);
push(2);
push(3);
console.log(stack);
console.log(peek());
console.log(pop());
console.log(stack);
console.log(length());
