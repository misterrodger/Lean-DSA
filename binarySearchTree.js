const {ifThen} = require("./utils");

let root;

const createNode = (data) => ({data});

const add = (value) => {
  if (!root) {
    root = createNode(value);
    return;
  }

  const extendTree = (root) => value < root.data
    ? !root.left
      ? root.left = createNode(value)
      : extendTree(root.left)
    : !root.right
      ? root.right = createNode(value)
      : extendTree(root.right);

  return extendTree(root);
};

const findMin = ({data, left}) => left
  ? findMin(left)
  : data;

const findMax = ({data, right}) => right
  ? findMax(right)
  : data;

const find = (value) => {
  const searchTree = (root) => value === root.data
    ? root
    : value < root.data
      ? searchTree(root.left)
      : searchTree(root.right);

  return searchTree(root);
};

const isPresent = (value) => {
  const searchTree = (root) => !root
    ? false
    : value === root.data
      ? true
      : value < root.data
        ? searchTree(root.left)
        : searchTree(root.right);

  return searchTree(root);
};

const remove = (value) => {
  const getNextLowest = ({data, left}) => left
    ? getNextLowest(left)
    : data;

  const removeNode = (node, value) => !node
    ? undefined
    : value === node.data
      ? node.left && node.right
        ? {...node, data: getNextLowest(node.right), right: removeNode(node.right, getNextLowest(node.right))}
        : node.right || node.left
      : value < node.data
        ? {...node, left: removeNode(node.left, value)}
        : {...node, right: removeNode(node.right, value)};

  root = removeNode(root, value);
};

const getMinHeight = (root) => !root
  ? -1
  : getMinHeight(root.left) < getMinHeight(root.right)
    ? getMinHeight(root.left) + 1
    : getMinHeight(root.right) + 1;

const getMaxHeight = (root) => !root
  ? -1
  : getMaxHeight(root.left) > getMaxHeight(root.right)
    ? getMaxHeight(root.left) + 1
    : getMaxHeight(root.right) + 1;

const isBalanced = () => getMaxHeight(root) - getMinHeight(root) <= 1;

const inOrderTraversal = (root) => {
  if (!root) return;

  const result = [];

  const traverse = ({data, left, right}) => {
    left && traverse(left);
    result.push(data);
    right && traverse(right);
  };
  traverse(root);
  return result;
};

const preOrderTraversal = (root) => {
  if (!root) return;

  const result = [];

  const traverse = ({data, left, right}) => {
    result.push(data);
    left && traverse(left);
    right && traverse(right);
  };
  traverse(root);
  return result;
};

const postOrderTraversal = (root) => {
  if (!root) return;

  const result = [];

  const traverse = ({data, left, right}) => {
    left && traverse(left);
    right && traverse(right);
    result.push(data);
  };
  traverse(root);
  return result;
};

const levelOrderTraversal = (root) => {
  if (!root) return;

  const traverseLevel = (temp, result = []) => {
    if (!temp.length) return result;

    const {data, left, right} = temp.shift();

    return traverseLevel(
      [...temp, ...ifThen(left), ...ifThen(right)],
      [...result, data]
    );
  };
  return traverseLevel([root]);
};
