import schematic from "./schematic.js";

//part a
// function sumNumbers(data) {
//   const grid = data.map((line) => line.split(""));
//   const rows = grid.length;
//   const cols = grid[0].length;
//   const symbols = ["*", "+", "#", "$", "@", "-", "=", "&", "%", "/"];
//   let sum = 0;

//   function isNextToSymbl(row, col) {
//     for (let dx = -1; dx <= 1; dx++) {
//       for (let dy = -1; dy <= 1; dy++) {
//         if (dx === 0 && dy === 0) continue;
//         const nx = row + dx;
//         const ny = col + dy;
//         if (
//           nx >= 0 &&
//           nx < rows &&
//           ny >= 0 &&
//           ny < cols &&
//           symbols.includes(grid[nx][ny])
//         ) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }

//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       if (!isNaN(grid[row][col]) && grid[row][col] !== ".") {
//         let num = "";
//         let endCol = col;
//         while (
//           endCol < cols &&
//           !isNaN(grid[row][endCol]) &&
//           grid[row][endCol] !== "."
//         ) {
//           num += grid[row][endCol];
//           endCol++;
//         }
//         for (let checkCol = col; checkCol < endCol; checkCol++) {
//           if (isNextToSymbl(row, checkCol)) {
//             sum += parseInt(num, 10);
//             break;
//           }
//         }

//         col = endCol - 1;
//       }
//     }
//   }
//   return sum;
// }
// const result = sumNumbers(schematic);
// console.log(result);

// part b

function sumGears(data) {
  const grid = data.map((line) => line.split(""));
  let totalGearRatio = 0;

  function getPartNumAt(row, col) {
    if (grid[row][col] === "." || isNaN(grid[row][col])) {
      return null;
    }
    let num = "";
    for (
      let dy = col;
      dy >= 0 && !isNaN(grid[row][dy]) && grid[row][dy] !== ".";
      dy--
    ) {
      num = grid[row][dy] + num;
    }
    for (
      let dy = col + 1;
      dy < grid[row].length && !isNaN(grid[row][dy]) && grid[row][dy] !== ".";
      dy++
    ) {
      num += grid[row][dy];
    }
    return parseInt(num, 10);
  }

  function findPartNums(row, col) {
    const partNums = new Set();
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx === 0 && dy === 0) continue;
        const nx = row + dx;
        const ny = col + dy;

        if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[nx].length) {
          const partNum = getPartNumAt(nx, ny);
          if (partNum !== null) {
            partNums.add(partNum);
          }
        }
      }
    }
    return Array.from(partNums);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "*") {
        const partNums = findPartNums(row, col);

        if (partNums.length === 2) {
          totalGearRatio += partNums[0] * partNums[1];
        }
      }
    }
  }
  return totalGearRatio;
}

const result = sumGears(schematic);
console.log(result);
