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


add(0);
add(1);
add(2);
add(5);
add(3);
add(13);
add(8);
add(21);
console.dir(root,  {depth: null});
console.log(findMin(root));
console.log(findMax(root));
console.log(find(13));
console.log(isPresent(5));
console.log(isPresent(6));
remove(13);
console.dir(root, {depth: null});
