const generateParens = (x) => {
  const result = [];
  const stack = [{ str: '', open: 0, close: 0 }];

  while (stack.length > 0) {
    const {str, open, close} = stack.pop();

    if (str.length === x * 2) {
      result.push(str);
      continue
    }

    if (open < x ) {
      stack.push({str: str + '(', open: open + 1, close});
    }

    if (close < open) {
      stack.push({str: str + ')', open, close: close + 1})
    }
  }
  return result
}

console.log(generateParens(3));
