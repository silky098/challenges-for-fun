import games from "./games.js";

//part a

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
        const [count, colour] = cube.split(" ");
        cubeCounts[colour] += parseInt(count);
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

// ----------------------------
//part b

// function calcMinCubesAndTotalPower(games) {
//   let totalPowr = 0;

//   games.forEach((game) => {
//     const sets = game.split(": ")[1].split("; ");
//     let maxCubes = { red: 0, green: 0, blue: 0 };

//     sets.forEach((set) => {
//       set.split(", ").forEach((cube) => {
//         const [count, colour] = cube.split(" ");
//         maxCubes[colour] = Math.max(maxCubes[colour], parseInt(count));
//       });
//     });

//     const power = maxCubes.red * maxCubes.green * maxCubes.blue;
//     totalPowr += power;
//   });

//   return totalPowr;
// }

// const result = calcMinCubesAndTotalPower(games);
// console.log(result);
