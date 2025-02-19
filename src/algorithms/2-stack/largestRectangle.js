function largestRectangle(heights) {
  const stack = [];
  let maxArea = 0;

  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack.at(-1)]) {
      const lastHeight = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, lastHeight * width)
    }
    stack.push(i)
  }
  return maxArea
}

console.log(largestRectangle([2, 1, 5, 6, 2, 3]));

