function evalRPN(arr) {
  const operationsLookup = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
      const result = a / b
      return result > 0
        ? Math.floor(result)
        : Math.ceil(result)
    }
  }
  const stack = []

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const isOperand = ['+', '-', '*', '/'].includes(current)

    if (!isOperand) {
      stack.push(Number(current));
    }
    if (isOperand) {
      const num1 = stack.pop();
      const num2 = stack.pop();

      const val = operationsLookup[current](num2, num1)

      stack.push(val)
    }
  }
  return stack[0]
}

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
