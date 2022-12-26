const {
  traverseLeft,
  traverseRight,
  pushData,
  traversalOperator
} = require("../helpers/traversalHelpers");
const {ifThen} = require("../utils");

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

const inOrderTraversal = (root) => traversalOperator(traverseLeft, pushData, traverseRight)(root);

const preOrderTraversal = (root) => traversalOperator(pushData, traverseLeft, traverseRight)(root);

const postOrderTraversal = (root) => traversalOperator(traverseLeft, traverseRight, pushData)(root);

const levelOrderTraversal = (root) => {
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


// examples
add(5);
add(2);
add(1);
add(3);
add(21);
add(13);
add(8);
add(14);
add(34);

console.log(findMin(root));  // 1
console.log(findMax(root));  // 34
console.log(isPresent(5));  // true
console.log(isPresent(6));  // false
console.log(find(13));  // { data: 13, left: { data: 8 }, right: { data: 14 } }
remove(13);
console.log(find(14));  // { data: 14, left: { data: 8 }, right: undefined }

console.log(getMinHeight(root));  // 2
console.log(getMaxHeight(root));  // 3
console.log(isBalanced());  // true

console.log(inOrderTraversal(root));  // [1, 2, 3, 5, 8, 14, 21, 34]
console.log(preOrderTraversal(root));  // [5, 2, 1, 3, 21, 14, 8, 34]
console.log(postOrderTraversal(root));  //  [1, 3, 2, 8, 14, 34, 21, 5]
console.log(levelOrderTraversal(root));  //  [5, 2, 21, 1, 3, 14, 34, 8]
