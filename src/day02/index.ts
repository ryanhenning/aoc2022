import run from "aocrunner";

type matchup = {
  yourChoice: string;
  opponentChoice: string;
};

const parseInput = (rawInput: string) => {
  const input = rawInput.split(/\r?\n/);

  const matchups = input.map<matchup>((matchup) => ({
    opponentChoice: matchup.split(" ")[0],
    yourChoice: matchup.split(" ")[1],
  }));
  return matchups;
};

const rateChoice = (choice: string): number => {
  switch (choice) {
    case "X":
      return 1;
    case "Y":
      return 2;
    case "Z":
      return 3;
    default:
      return 0;
  }
};

/*
A and X are Rock
B and Y are Paper
C and Z are scissor

Rock beats Scissor
Paper beats Rock
Scissor beats Paper
*/

const resolveMatch = (round: matchup): number => {
  switch (round.opponentChoice) {
    case "A":
      if (round.yourChoice === "X") {
        return 3;
      }
      if (round.yourChoice === "Y") {
        return 6;
      }
      if (round.yourChoice === "Z") {
        return 0;
      }
    case "B":
      if (round.yourChoice === "X") {
        return 0;
      }
      if (round.yourChoice === "Y") {
        return 3;
      }
      if (round.yourChoice === "Z") {
        return 6;
      }
    case "C":
      if (round.yourChoice === "X") {
        return 6;
      }
      if (round.yourChoice === "Y") {
        return 0;
      }
      if (round.yourChoice === "Z") {
        return 3;
      }
    default:
      return 0;
  }
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const roundResults = input
    .reduce(
      (acc, round) =>
        acc + (resolveMatch(round) + rateChoice(round.yourChoice)),
      0,
    )
    .toString();

  return roundResults;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: `A Y\nB X\nC Z`,
        expected: "15",
      },
    ],
    solution: part1,
  },
  // part2: {
  //   tests: [
  //     // {
  //     //   input: ``,
  //     //   expected: "",
  //     // },
  //   ],
  //   solution: part2,
  // },
  trimTestInputs: true,
  onlyTests: false,
});
