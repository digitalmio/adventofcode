export const removeDigit = (num: number, toRemove: number): number => {
  const numStringArr = String(num).split("");

  const indexes = numStringArr.reduce((acc, el, i) => {
    if (el === String(toRemove)) {
      acc.push(i);
    }
    return acc;
  }, [] as number[]);

  const res = indexes
    .map((el) => Number(numStringArr.toSpliced(Number(el), 1).join("")))
    .sort()
    .at(-1);

  return res || 0;
};

console.log(removeDigit(31415926, 1)); // 3415926
console.log(removeDigit(1231, 1)); // 231
