const queue = [];

const print = () => queue;

const enqueue = (item) => queue.push(item);

const dequeue = () => queue[0]
  ? queue.shift()
  : "sorry queue has no items to dequeue";

const front = () => queue[0]
  ? queue[0]
  : "sorry queue has no items from which to show front item";

const size = () => queue.length;

const isEmpty = () => !Boolean(queue.length);


// examples
enqueue(1);
enqueue(2);
enqueue(3);
console.log(print());  // [1, 2, 3]
console.log(dequeue());  // 1
console.log(front());  // 2
console.log(size());  // 2
console.log(isEmpty());  // false
