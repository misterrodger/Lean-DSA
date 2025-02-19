export const pigIt = (a: string): string => a
  .split(' ')
  .map(each => {
    return /^[a-z]+$/i.exec(each)
      ? `${each.slice(1)}${each[0]}ay`
      : each
  })
  .join(' ')

console.log(pigIt('Hello world !'));
// console.log(pigIt('Pig latin is cool'));

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript
