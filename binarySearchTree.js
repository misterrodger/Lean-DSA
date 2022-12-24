const {ifThen} = require("./utils");

let root;

const node = (data) => ({data});

const add = (data) => {
  if (!root) return root = node(data);

  const extendTree = (root) => data < root.data
    ? !root.left
      ? root.left = node(data)
      : extendTree(root.left)
    : !root.right
      ? root.right = node(data)
      : extendTree(root.right);

  return extendTree(root);
};

const findMin = (root) => root.left
  ? findMin(root.left)
  : root.data;

const findMax = (root) => root.right
  ? findMax(root.right)
  : root.data;

const find = (data) => {
  const searchTree = (root) => data === root.data
    ? root
    : data < root.data
      ? searchTree(root.left)
      : searchTree(root.right);

  return searchTree(root);
}

const isPresent = (data) => {
  const searchTree = (root) => !root
    ? false
    : data === root.data
      ? true
      : data < root.data
        ? searchTree(root.left)
        : searchTree(root.right);

  return searchTree(root);
}

const remove = (data) => {
  const getNextLowest = (node) => node.left
      ? getNextLowest(node.left)
      : node.data;

  const removeNode = (node, data) => ! node
    ? undefined
    : data === node.data
      ? node.left && node.right
        ? {...node, data: getNextLowest(node.right), right: removeNode(node.right, getNextLowest(node.right))}
        : node.right || node.left
      : data < node.data
        ? {...node, left: removeNode(node.left, data)}
        : {...node, right: removeNode(node.right, data)}

  root = removeNode(root, data);
}

const getMinHeight = (node) => !node
  ? -1
  : getMinHeight(node.left) < getMinHeight(node.right)
    ? getMinHeight(node.left) + 1
    : getMinHeight(node.right) + 1;

const getMaxHeight = (node) => !node
  ? -1
  : getMaxHeight(node.left) > getMaxHeight(node.right)
    ? getMaxHeight(node.left) + 1
    : getMaxHeight(node.right) + 1;

const isBalanced = () => getMaxHeight(root) - getMinHeight(root) <= 1;

const inOrderTraversal = (root) => {
  if (!root) return;

  const result = [];

  const traverse = (node) => {
      node.left && traverse(node.left);
      result.push(node.data);
      node.right && traverse(node.right);
    }
  traverse(root);
  return result;
}

const preOrderTraversal = (root) => {
  if (!root) return;

  const result = [];

  const traverse = (node) => {
    result.push(node.data);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  }
  traverse(root);
  return result;
}

const postOrderTraversal = (root) => {
  if (!root) return;

  const result = [];

  const traverse = (node) => {
    node.left && traverse(node.left);
    node.right && traverse(node.right);
    result.push(node.data);
  }
  traverse(root);
  return result;
}

const levelOrderTraversal = (root) => {
  if (!root) return;

  const traverseLevel = (temp, result = []) => {
    if (!temp.length) return result;

    const {data, left, right} = temp.shift();

    return traverseLevel(
      [...temp, ...(ifThen(left)), ...(ifThen(right))],
      [...result, data]
    )
  }
  return traverseLevel([root]);
}
