import scratchies from "./scratchies.js";

function calcPoints(cards) {
  let totalPoints = 0;

  cards.forEach((card) => {
    const [winningNums, yourNums] = card
      .split(" | ")
      .map((part) => part.trim().split(/\s+/).map(Number));
    const matches = yourNums.filter((number) => winningNums.includes(number));
    let points = matches.length > 0 ? 1 : 0;

    for (let i = 1; i < matches.length; i++) {
      points *= 2;
    }

    totalPoints += points;
  });

  return totalPoints;
}

const totalPoints = calcPoints(scratchies);
console.log(totalPoints);
