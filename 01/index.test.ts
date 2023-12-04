import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

const calculate = (data: string): number => data.split('\n').reduce((acc, el) => {
  const numbers = el.replace(/[^0-9]/g, '');
  return acc + Number(numbers.at(0)!  + numbers.at(-1)!);
}, 0);

Deno.test('Advent of code day 1', () => {
  const testData = 
`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

  assertEquals(calculate(testData), 142);
});