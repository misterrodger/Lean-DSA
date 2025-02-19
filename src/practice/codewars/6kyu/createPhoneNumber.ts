export function createPhoneNumber(numbers: number[]) {
  const areaCode = numbers.slice(0, 3).join('')
  const firstNums = numbers.slice(3, 6).join('')
  const lastNums = numbers.slice(6).join('')

  return `(${areaCode}) ${firstNums}-${lastNums}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
