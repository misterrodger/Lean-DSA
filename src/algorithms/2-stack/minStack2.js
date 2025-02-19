
var MinStack = function() {
  this.stack = []    
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
      this.stack.push(val)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop()    
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack.at(-1)
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return Math.min(...this.stack)
  
};


const obj = new MinStack()
obj.push(3)
obj.push(4)
obj.pop()
const param_3 = obj.top()
const param_4 = obj.getMin()

console.log(obj.stack);
console.log(param_3);
console.log(param_4);
