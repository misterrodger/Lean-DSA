export function isLeapYear(year: number) {
  const isDivisibleByFour = year % 4 === 0;
  const isDivisibleBy100 = year % 100 === 0;
  const isDivisibleBy400 = year % 400 === 0;

  return (isDivisibleByFour && !isDivisibleBy100)
  || (isDivisibleByFour && isDivisibleBy100 && isDivisibleBy400);
}
