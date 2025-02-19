const board = [
  ['5','3','.','.','7','.','.','.','.'],
  ['6','.','.','1','9','5','.','.','.'],
  ['.','9','8','.','.','.','.','6','.'],
  ['8','.','.','.','6','.','.','.','3'],
  ['4','.','.','8','.','3','.','.','1'],
  ['7','.','.','.','2','.','.','.','6'],
  ['.','6','.','.','.','.','2','8','.'],
  ['.','.','.','4','1','9','.','.','5'],
  ['.','.','.','.','8','.','.','7','9']
];

const validateSudokuSet = (row) => {
  const hash = {};
  return row.every(each => {
    if (each === '.') return true;

    return each >= 0 && each < 10 && hash[each] === undefined && (hash[each] = each);
  });
};

const processRows = (board) => {
  return board.every(each => validateSudokuSet(each));
};

const processColumns = (board) => {
  for (let x = 0; x < board.length; x++) {
    const column = board.map(each => each[x]);
    if (!validateSudokuSet(column)) {
      return false;
    }
  }
  return true;
};

const processMatrices = (board) => {
  const squareRoot = Math.sqrt(board.length);
  const matrices = [];

  for (let x = 0; x < board.length; x += squareRoot) {  // rows
    for (let y = 0; y < board.length; y += squareRoot) {  // columns
      const matrix = [];

      for (let i = x; i < x + squareRoot; i++) { // submatrix rows
        for (let j = y; j < y + squareRoot; j++) { // submatrix columns
          matrix.push(board[i][j]);
        }
      }
      matrices.push(matrix);
    }
  }
  return matrices;
};

function isValidSudoku(board) {
  const subMatrices = processMatrices(board);
  const isValidMatrices = processRows(subMatrices);

  return processRows(board) && processColumns(board) && isValidMatrices;
}

console.log(isValidSudoku(board));
