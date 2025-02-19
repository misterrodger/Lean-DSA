// const dailyTemps = (temps) => {
//   const stack = [];
//   const result = new Array(temps.length).fill(0);

//   for (let i = 0; i < temps.length; i++) {  // i is the current temp in the list you're evaluating
//     while ( stack.length > 0 && temps[i] > temps[stack.at(-1)]) {  // skip the first time and will push index onto stack, and skip as long as temp/next isn't greater than temp/current 
//       const prevIndex = stack.pop();
//       result[prevIndex] = i - prevIndex    
//     }
//     stack.push(i)  // push the current index onto the stack
//   }
//   return result
// }

const dailyTemps = tempsArr => {
  const result = []
  let current = 1

  for (let i = 0;i < tempsArr.length; i++) {
    while (tempsArr[i] >= tempsArr[i + current] && i + current !== tempsArr.length) {
      current += 1;
    }
  if (tempsArr[i] < tempsArr[i + current] ) {
    result.push(current)
  } else {
    result.push(0)
  }
    current = 1
  }
}

console.log(dailyTemps([73,74,75,71,69,72,76,73]));
