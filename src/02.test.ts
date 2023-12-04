import {
  assertEquals,
  assertObjectMatch,
} from "https://deno.land/std@0.208.0/assert/mod.ts";

type Cubes = {
  red: number;
  green: number;
  blue: number;
};

const games = (data: string, config: Cubes) => {
  return data.split("\n").reduce((acc, el) => {
    const matchesConfig = (val: string) => {
      const zeroConf = { red: 0, green: 0, blue: 0 } satisfies Cubes;
      const entries = val.split(",");
      const cubesCount = entries.reduce(
        (cubesAcc: Cubes, cubeEl: string): Cubes => {
          // @ts-ignore
          const [count, colour]: [string, keyof Cubes] = cubeEl
            .trim()
            .split(" ");
          cubesAcc[colour] = Number(count);
          return cubesAcc;
        },
        zeroConf
      );

      const colours = ["red", "green", "blue"] satisfies Array<keyof Cubes>;
      return colours.every((el) => cubesCount[el] <= config[el]);
    };

    const [gameStr, gamesData] = el.split(":");
    const gamesArr = gamesData.split(";");

    if (gamesArr.every(matchesConfig)) {
      acc.push(Number(gameStr.replace("Game ", "")));
    }

    return acc;
  }, [] as number[]);
};

Deno.test("Advent of code, day 2", () => {
  const testData = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

  const config = {
    red: 12,
    green: 13,
    blue: 14,
  };

  assertEquals(games(testData, config), [1, 2, 5]);
});

const games2 = (data: string) => {
  return data.split("\n").reduce((acc, el) => {
    const zeroConf = { red: 0, green: 0, blue: 0 } satisfies Cubes;
    const [gameStr, gamesData] = el.split(":");
    const gamesArr = gamesData.split(";").flatMap((game) => game.split(","));

    const entries = gamesArr.reduce((gameCubesAcc, entry) => {
      // @ts-ignore
      const [count, colour]: [string, keyof Cubes] = entry.trim().split(" ");
      gameCubesAcc[colour] =
        gameCubesAcc[colour] > Number(count)
          ? gameCubesAcc[colour]
          : Number(count);
      return gameCubesAcc;
    }, zeroConf);

    acc[gameStr.trim().replace("Game ", "")] = entries;

    return acc;
  }, {} as Record<string, Cubes>);
};

const calculateGames2Power = (data: Record<string, Cubes>) =>
  Object.values(data).reduce((acc, el) => {
    const power = el.red * el.blue * el.green;
    return acc + power;
  }, 0);

Deno.test("Advent of code, day 2, v2", () => {
  const testData = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

  const expected = {
    "1": { red: 4, green: 2, blue: 6 },
    "2": { red: 1, green: 3, blue: 4 },
    "3": { red: 20, green: 13, blue: 6 },
    "4": { red: 14, green: 3, blue: 15 },
    "5": { red: 6, green: 3, blue: 2 },
  };

  assertObjectMatch(games2(testData), expected);
  assertEquals(calculateGames2Power(games2(testData)), 2286);
});
