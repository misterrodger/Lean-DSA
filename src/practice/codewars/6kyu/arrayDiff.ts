
export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(each => !b.includes(each))
}

console.log(arrayDiff([1, 2, 3], [1, 2]));




// https://www.codewars.com/kata/523f5d21c841566fde000009
