import scratchies from "./scratchies.js";

//part a

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

// --------------------------------------

// part b

function calcTotalCards(cards) {
  const matchesPerCard = cards.map((card) => {
    const [winningNums, yourNums] = card
      .split(" | ")
      .map((part) => part.trim().split(/\s+/).map(Number));
    const matches = yourNums.filter((number) => winningNums.includes(number));
    return matches.length;
  });

  const cardCollection = new Map(
    new Array(matchesPerCard.length).fill(1).map((_, i) => [i, 1])
  );

  for (const [i, matchCount] of matchesPerCard.entries()) {
    if (matchCount === 0) continue;
    const existingCards = cardCollection.get(i);
    for (let j = 1; j <= matchCount; j++) {
      cardCollection.set(
        i + j,
        (cardCollection.get(i + j) || 0) + existingCards
      );
    }
  }

  const totalCards = Array.from(cardCollection.values()).reduce(
    (acc, count) => acc + count,
    0
  );

  return totalCards;
}

const totalCardsResult = calcTotalCards(scratchies);
console.log(totalCardsResult);
