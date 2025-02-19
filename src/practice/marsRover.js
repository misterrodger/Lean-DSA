/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */

const headings = ['N', 'E', 'S', 'W'];

const moveLookup = {
  'N': (x, y) => [x, y + 1],
  'S': (x, y) => [x, y - 1],
  'E': (x, y) => [x + 1, y],
  'W': (x, y) => [x - 1, y]
};

const outOfBoundsCheck = ({xLength, yLength, roverX, roverY}) => roverX > xLength
    || roverX < 0
    || roverY > yLength
    || roverY < 0;

function getMatrix(matrix) {
  const [xLength, yLength]= matrix.split(' ').map(Number);

  return ([roverX, roverY, heading], directions) => {

    const actionsLookup = {
      'R': () => {
        heading = headings[(headings.indexOf(heading) + 1) % 4];
      },
      'L': () => {
        heading = headings[(headings.indexOf(heading) + 3) % 4];
      },
      move: () => {
        return moveLookup[heading](roverX, roverY);
      }
    };

    for (let x = 0; x < directions.length; x++) {
      console.log([roverX, roverY, heading]);
      if (outOfBoundsCheck({xLength, yLength, roverX, roverY})) {
        return `(${roverX}, ${roverY}, ${heading}) LOST`;
      }
      if (['L', 'R'].includes(directions[x])) {
        actionsLookup[directions[x]]();
      } else {
        const [newRoverX, newRoverY] = actionsLookup.move();
        [roverX, roverY] = [newRoverX, newRoverY];
      }
    }
    return `(${roverX}, ${roverY}, ${heading})`;
  };
}

const matrix = getMatrix('4 8');

// console.log(matrix([2, 3, 'E'], 'LFRFF'));  // (4, 4, E)
console.log(matrix([0, 2, 'N'], 'FFLFRFF'));  // (-1, 4, W) LOST
