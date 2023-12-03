import schematic from "./schematic.js";

//part a
function sumNumbers(data) {
  const grid = data.map((line) => line.split(""));
  const rows = grid.length;
  const cols = grid[0].length;
  const symbols = ["*", "+", "#", "$", "@", "-", "=", "&", "%", "/"];
  let sum = 0;

  function isNextToSymbl(row, col) {
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx === 0 && dy === 0) continue;
        const nx = row + dx;
        const ny = col + dy;
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          symbols.includes(grid[nx][ny])
        ) {
          return true;
        }
      }
    }
    return false;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!isNaN(grid[row][col]) && grid[row][col] !== ".") {
        let num = "";
        let endCol = col;
        while (
          endCol < cols &&
          !isNaN(grid[row][endCol]) &&
          grid[row][endCol] !== "."
        ) {
          num += grid[row][endCol];
          endCol++;
        }
        for (let checkCol = col; checkCol < endCol; checkCol++) {
          if (isNextToSymbl(row, checkCol)) {
            sum += parseInt(num, 10);
            break;
          }
        }

        col = endCol - 1;
      }
    }
  }
  return sum;
}

const result = sumNumbers(schematic);
console.log(result);
