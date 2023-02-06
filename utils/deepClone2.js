const getContainer = (input) => Array.isArray(input) ? [] : {};

const nestedObjectReducer = (acc, [key, value]) => {
  acc[key] = deepClone2(value);
  return acc;
};

const deepClone2 = (input) => typeof input !== 'object' || input === null
  ? input
  : Object.entries(input)
    .reduce(
      nestedObjectReducer,
      getContainer(input)
      );

module.exports = deepClone2
