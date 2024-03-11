export const maxGap = (userArr: number[]): number =>
  Math.max(
    0,
    ...userArr
      .sort()
      .map((el, i, arr) => arr[i + 1] - el)
      .filter(Boolean)
  );

console.log(maxGap([3, 6, 9, 1, 2])); // 3
