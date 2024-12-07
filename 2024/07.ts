const input = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

const inputArr = input.split("\n").map((el) => {
  const temp = el.split(":");
  return {
    result: Number.parseInt(temp[0]),
    numbers: temp[1].trim().split(" ").map(Number),
  };
});

function checkRow({
  result,
  numbers,
}: { result: number; numbers: number[] }): boolean {
  function tryMaths(currentValue: number, restNums: number[]): boolean {
    if (!restNums || restNums.length === 0) {
      return currentValue === result;
    }

    const [num, ...rest] = restNums;

    // add +
    if (currentValue + num <= result && tryMaths(currentValue + num, rest)) {
      return true;
    }

    // multiply *
    if (currentValue * num <= result && tryMaths(currentValue * num, rest)) {
      return true;
    }

    // concatenate ||
    const concatenated = Number.parseInt(`${currentValue}${num}`);
    if (concatenated <= result && tryMaths(concatenated, rest)) {
      return true;
    }

    return false;
  }

  const [firstNum, ...restNums] = numbers;
  return tryMaths(firstNum, restNums);
}

// get sum
console.time();
const resultSum = inputArr.reduce(
  (acc, el) => acc + (checkRow(el) ? el.result : 0),
  0,
);
console.timeEnd();

console.log({
  resultSum,
});

export { };
