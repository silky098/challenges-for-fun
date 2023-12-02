//part a

import games from "./games.js";

function idTotals(games, allCubes) {
  let sum = 0;

  games.forEach((game) => {
    const gameParts = game.split(": ");
    const gameID = parseInt(gameParts[0].split(" ")[1]);
    const sets = gameParts[1].split("; ");

    let isPossible = true;
    for (const set of sets) {
      const cubeCounts = { red: 0, green: 0, blue: 0 };
      set.split(", ").forEach((cube) => {
        const [count, color] = cube.split(" ");
        cubeCounts[color] += parseInt(count);
      });

      if (
        cubeCounts.red > allCubes.red ||
        cubeCounts.green > allCubes.green ||
        cubeCounts.blue > allCubes.blue
      ) {
        isPossible = false;
        break;
      }
    }

    if (isPossible) {
      sum += gameID;
    }
  });

  return sum;
}

const allCubes = { red: 12, green: 13, blue: 14 };
const result = idTotals(games, allCubes);
console.log(result);
