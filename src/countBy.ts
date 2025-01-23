const countBy = (
  input: any[],
  fn: string | ((...params: any[]) => string | number),
) =>
  input.map((el) => typeof fn === "function" ? fn(el) : el[fn]).reduce<
    Record<string, number>
  >((acc, el) => {
    acc[el] = (acc[el] ?? 0) + 1;
    return acc;
  }, {});

console.log(countBy([6, 10, 100, 10], Math.sqrt));
console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(["one", "two", "three"], "length"));
