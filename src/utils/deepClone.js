// v1 imperative approach
const deepClone = (input) => {
  if (typeof input !== 'object' || input === null) return input;

  const container = Array.isArray(input) ? [] : {};

  Object.entries(input).forEach(([key, value]) => container[key] = deepClone(value));

  return container;
};

// v2 reduce everything
const getContainer = (input) => Array.isArray(input) ? [] : {};

const nestedObjectReducer = (acc, [key, value]) => {
  acc[key] = deepClone2(value);
  return acc;
};

function deepClone2(input) {
  return typeof input !== 'object' || input === null
    ? input
    : Object.entries(input)
      .reduce(
        nestedObjectReducer,
        getContainer(input)
      );
}

// v3 map arrays, reduce objects
const deepClone3 = (input) => typeof input !== 'object' || input === null
  ? input
  : Array.isArray(input)
    ? input.map(deepClone3)
    : Object.entries(input)
      .reduce((acc, [key, value]) => ({...acc, [key]: deepClone3(value)}), {});

export {
  deepClone,
  deepClone2,
  deepClone3
};
