const traversalResult = [];

const traverseLeft = (data, process) => data.left && process(data.left);
const traverseRight = (data, process) => data.right && process(data.right);

const pushData = ({data}, _) => traversalResult.push(data);

const traversalOperator = (...funcs) => (root) => {
  traversalResult.length = 0;

  const process = (data) => {
    funcs[0](data, process);
    funcs[1](data, process);
    funcs[2](data, process);
  };
  process(root);

  return traversalResult;
};

module.exports = {
  traverseLeft,
  traverseRight,
  pushData,
  traversalOperator};
