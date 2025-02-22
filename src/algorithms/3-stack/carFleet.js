const carFleet = (target, position, speed) => {
  const carStack = [];

  for (let i = 0; i < position.length; i++) {
    carStack.push({position: position[i], timeNeeded: (target - position[i]) / speed[i] })  // distance remaining div by speed is timeNeeded
  }

  carStack.sort((a, b) => b.position - a.position)

  let fleets = 0;
  let currTime = 0

  carStack.forEach((car) => {
    if (car.timeNeeded > currTime) {
      fleets++;
      currTime = car.timeNeeded;
    }
  })
  return fleets
}

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));
