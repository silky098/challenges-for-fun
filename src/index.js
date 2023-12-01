// part b
import stars from "./stars.js";

const spelledDigits = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function translateSpelled(input) {
  return input.reduce((sum, line) => {
    const first = line.match(/\d/)[0];
    const last = [...line].reverse().join("").match(/\d/)[0];
    return sum + parseInt(first + last, 10);
  }, 0);
}

function fix(line) {
  let fixedLine = line.replace(
    /(one|two|three|four|five|six|seven|eight|nine)/g,
    (match) => {
      return spelledDigits[match] + match[match.length - 1];
    }
  );

  return fixedLine.replace(
    /(one|two|three|four|five|six|seven|eight|nine)/g,
    (match) => {
      return spelledDigits[match];
    }
  );
}

function addTheRest(input) {
  return translateSpelled(input.map((line) => fix(line)));
}

console.log(addTheRest(stars));

// // part a

// function sumCalibrationValues(documentArray) {
//     return documentArray.map(line => {
//         const firstDigit = line.match(/\d/)?.[0];
//         const lastDigit = line.match(/\d(?=[^\d]*$)/)?.[0];
//         return firstDigit && lastDigit ? parseInt(firstDigit + lastDigit, 10) : 0;
//     }).reduce((acc, val) => acc + val, 0);
// }

// const totalSum = sumCalibrationValues(stars);
// console.log(totalSum);
