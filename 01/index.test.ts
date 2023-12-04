import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

const calculate = (data: string): number => data.split('\n').reduce((acc, el) => {
  const numbers = el.replace(/[^0-9]/g, '');
  return acc + Number(numbers.at(0)!  + numbers.at(-1)!);
}, 0);

Deno.test("Advent of code day 1", () => {
  const testData = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

  assertEquals(calculate(testData), 142);
});

const calculateV2 = (data: string): number =>
  data.split("\n").reduce((acc, el) => {
    const numberToDigits = {
      one: "o1ne",
      two: "t2wo",
      three: "t3hree",
      four: "f4our",
      five: "f5ive",
      six: "s6ix",
      seven: "s7even",
      eight: "e8ight",
      nine: "n9ine",
    };

    const finalNums = Object.entries(numberToDigits).reduce(
      (acc, [str, num]) => {
        return acc.replaceAll(str, num);
      },
      el
    );

    const numbers = finalNums.replaceAll(/[^0-9]/g, "");
    return acc + Number(numbers.at(0)! + numbers.at(-1)!);
  }, 0);

Deno.test("Advent of code day 1-v2", () => {
  const testData = `two1nine
  eightwothree
  abcone2threexyz
  xtwone3four
  4nineeightseven2
  zoneight234
  7pqrstsixteen`;

  assertEquals(calculateV2(testData), 281);
});