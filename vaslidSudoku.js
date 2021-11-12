var isValidSudoku = function(board) {
  // get the board @ board[0];
  // iterate over the board
  for (let i = 0; i < board[0].length; i += 1) {
    // set rows to be board[i];
    var rows = board[0][i]
    // iterate over the values in each row
    for (let j = 0; j < rows.length; j += 1) {
      console.log(rows[i][j] === rows[i + 1][j] && rows[i][j] !== '.')
      if (rows[i][j] === rows[i + 1][j] && rowsrows[i][j] !== '.') {
        return false
      }
    }
  } 
};

var board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))
