function maxProfit(prices: number[]): number {
  let profit = 0
  let minPrice = Infinity

  prices.forEach(each => {
    if (each < minPrice) {
      minPrice = each
    } else if (each - minPrice > profit) {
      profit = each - minPrice
    }

  })

  return profit
};

console.log(maxProfit([7, 51, 1,5,3,6,4]));

// O(n) time complexity, O(1) space complexity
