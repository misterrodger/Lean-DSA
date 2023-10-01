const deepClone = require("./deepClone");
const deepClone2 = require("./deepClone2");
const deepClone3 = require("./deepClone3");

const ifThen = (value) => value ? [value] : [];

module.exports = {
  deepClone,
  deepClone2,
  deepClone3,
  ifThen
};
