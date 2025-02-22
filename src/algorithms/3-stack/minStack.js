class MinStack {
  stack = []

  push(val) {
    this.stack.push(val)
  }

  pop() {
    this.stack.pop()
  }

  top() {
    return this.stack.at(-1)
  }

  getMin() {
    return Math.min(...this.stack)
  }

}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin())// return -3
minStack.pop();
console.log(minStack.top())    // return 0
console.log(minStack.getMin()) // return -2
