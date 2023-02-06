const deepClone3 = (input) => typeof input !== 'object' || input === null
  ? input
  : Array.isArray(input)
    ? input.map(deepClone3)
    : Object.entries(input)
      .reduce((acc, [key, value]) => ({...acc, [key]: deepClone3(value)}), {});

module.exports = deepClone3
