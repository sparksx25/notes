// [有效的数独](https://leetcode.cn/problems/valid-sudoku/solutions/1001859/you-xiao-de-shu-du-by-leetcode-solution-50m6/)
var isValidSudoku = function(board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const c = board[i][j];
          if (c !== '.') {
              const index = c.charCodeAt(0) - '0'.charCodeAt(0) - 1;
              rows[i][index]++;
              columns[j][index]++;
              subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
              if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                  return false;
              }
          }
      }
  }
  return true;
};