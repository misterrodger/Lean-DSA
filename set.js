const collection = ["item1", "item2", "item3"];
const collection2 = ["item2", "item4"];

const has = (x) => collection.includes(x);

const add = (x) => collection.includes(x)
  ? `sorry, collection already has value ${x}`
  : collection.push(x);

const values = () => collection;

const remove = (x) => collection.includes(x)
  ? collection.splice(collection.indexOf(x), 1)
  : `sorry, collection doesn't have value ${x}`;

const clear = () => collection.length = 0;

const size = () => collection.length;

const union = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);

const intersection = (arr1, arr2) => arr1.flatMap(each => arr2.includes(each) ? each : []);

const difference = (arr1, arr2) => {
  const common = intersection(arr1, arr2);

  const getUnique = (acc, curr) => !common.includes(curr) && !acc?.includes(curr)
    ? [...acc, curr]
    : acc;

  return [...arr1, ...arr2].reduce(getUnique, []);
};

const subset = (arr1, arr2) => arr1.every(each => arr2.includes(each));

//
console.log(union(collection, collection2));
console.log(intersection(collection, collection2));
console.log(difference(collection, collection2));
console.log(subset(collection2, collection));
