const deepClone = (input) => {
  if (typeof input !== 'object' || input === null) return input;

  const container = Array.isArray(input) ? [] : {};

  Object.entries(input).forEach(([key, value]) => container[key] = deepClone(value));

  return container
}

module.exports = deepClone
