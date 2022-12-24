const queue = [];

const print = () => queue;

const enqueue = (item) => queue.push(item);

const dequeue = () => queue[0]
  ? queue.shift()
  : "sorry queue has no items to dequeue";

const front = () => queue[0]
  ? queue.slice(0, 1)
  : "sorry queue has no items from which to show front item";

const size = () => queue.length;

const isEmpty = () => !Boolean(queue.length);

//
console.log(print());
console.log(isEmpty());
console.log(dequeue());
console.log(front());
enqueue("a");
enqueue("b");
enqueue("c");
console.log(print());
console.log(isEmpty());
console.log(size());
console.log(front());
console.log(dequeue());
console.log(print());
