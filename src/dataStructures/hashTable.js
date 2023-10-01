// WIP

const getHash = (string, max) => string.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0);

const data = {};

const print = () => console.log(data);

const add = (key, value) => {
  const index = getHash(key);

  return data[index] === undefined
    ? data[index] = [value]
    : data[index].push(value);
};

const remove = (key) => {
  const index = getHash(key);
  delete data[index];
};

const lookup = (key) => {
  const index = getHash(key);
  console.log(data[index]);
};

print();
add('steve', {age: 25, role: 'manager'});
print();
add('fred', {age: 20, role: 'associate'});
add('bob', {age: 25, role: 'manager'});
add('steve', {age: 32, role: 'associate'});
print();
remove('bob');
print();
lookup('fred');
