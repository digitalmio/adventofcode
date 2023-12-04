import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

type Cubes = {
  red: number;
  green: number;
  blue: number;
};

const games1 = (data: string, config: Cubes) =>
  data
    .split("\n")
    .map((line) =>
      line
        .split(": ")[1]
        .split("; ")
        .map((turn) =>
          turn.split(", ").every((game) => {
            // @ts-ignore
            const [count, colour]: [string, keyof Cubes] = game.split(" ");
            return config[colour] >= Number(count);
          })
        )
        .every(Boolean)
    )
    .reduce((acc, el, i) => acc + (el ? i + 1 : 0), 0);

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

  assertEquals(games1(testData, config), 8);
});

const games2 = (data: string) => {
  return data
    .split("\n")
    .map((line) => {
      const zeroCount = { red: 0, green: 0, blue: 0 } satisfies Cubes;

      const rgb = line
        .split(": ")[1]
        .split("; ")
        .flatMap((game) => game.split(", "))
        .reduce((rgbAcc, game) => {
          // @ts-ignore
          const [count, colour]: [string, keyof Cubes] = game.split(" ");
          if (rgbAcc[colour] < Number(count)) {
            rgbAcc[colour] = Number(count);
          }
          return rgbAcc;
        }, zeroCount);

      return rgb.blue * rgb.green * rgb.red;
    })
    .reduce((acc, el) => acc + el, 0);
};

Deno.test("Advent of code, day 2, v2", () => {
  const testData = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

  assertEquals(games2(testData), 2286);
});
