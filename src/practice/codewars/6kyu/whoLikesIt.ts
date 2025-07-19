type Hash = { [key: number]: string }

const contentLookup: Hash = {
  0: 'likes this',
  1: 'likes this',
  2: 'like this',
  3: 'like this'
};

const formatNames = (arr: string[]) => arr.length === 0
  ? 'no one'
  : arr.length === 1
    ? arr[0]
    : arr.length === 2
      ? `${arr[0]} and ${arr[1]}`
      : arr.length === 3
        ? `${arr[0]}, ${arr[1]} and ${arr[2]}`
        : `${arr[0]}, ${arr[1]} and ${arr.length - 2}`;

export const likes = (a : string[]) : string => {
  return `${formatNames(a)} ${contentLookup[a.length] ?? 'others like this'}`;
};

console.log(likes(['Max', 'John', 'Mark']));

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript
