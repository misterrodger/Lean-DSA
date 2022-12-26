// different enqueue, otherwise same as queue

const priorityQueue = [];

const print = () => priorityQueue;

const enqueueV1 = (item) => {
  if (!priorityQueue.length) {
    priorityQueue.push(item);
    return;
  }

  const priorityArray = priorityQueue.map(each => each[0]);

  priorityArray.map((each, index) => {
    const insertionPoint = priorityArray.lastIndexOf(each);
    const isNoneFurther = priorityArray.slice(index + 1).every(every => every > each && every > item[0]);

    if (each <= item[0] && index === insertionPoint && isNoneFurther) {
      priorityQueue.splice(insertionPoint + 1, 0, item);
    }
  });
};

const enqueueV2 = (item) => {  // breaks earlier
  if (!priorityQueue.length) {
    priorityQueue.push(item);
    return;
  }

  for (let i = 0; i < priorityQueue.length; i++) {
    const isNoneFurther = priorityQueue.slice(i + 1).every(([priority, _]) => priority > item[0]);

    if (priorityQueue[i][0] <= item[0] && isNoneFurther) {
      priorityQueue.splice(i + 1, 0, item);
      break;
    }
  }
};
