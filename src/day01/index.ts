import run from "aocrunner";

const parseInput = (rawInput: string) => {
  const input = rawInput.split(/\r?\n/);
  const elves: Elf[] = [{ food: [] }];
  let index = 0;

  input.forEach((food) => {
    // if the food has no calories, add a new elf to the array and move on to the next food item
    if (!food) {
      index++;
      elves.push({ food: [] });
      return Math.max(...elves.map((elf) => elf.totalCalories as number));
    }

    elves[index].food.push(+food);
  });

  elves.forEach(
    (elf) => (elf.totalCalories = determineTotalCalories(elf.food)),
  );

  return elves;
};

const determineTotalCalories = (foodCollection: number[]): number =>
  foodCollection.reduce((acc, food) => acc + food, 0);

type Elf = {
  food: number[];
  totalCalories?: number;
};

const part1 = (rawInput: string) => {
  const elves = parseInput(rawInput);

  return Math.max(...elves.map((elf) => elf.totalCalories as number));
};

const part2 = (rawInput: string) => {
  const calorieCounts = parseInput(rawInput).map(
    (elf) => elf.totalCalories as number,
  );
  console.log(calorieCounts.sort((a, b) => b - a));

  const top3 = calorieCounts.sort((a, b) => b - a).splice(0, 3);

  return top3.reduce((acc, cur) => acc + cur, 0);
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `24000\n\n11000\n\n10\n\n500\n\n10000`,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
