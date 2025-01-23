const input = "2333133121414131402";

type NumberOrDotArr = Array<number | ".">;

export const diskDefragmentation = (data: string): NumberOrDotArr => {
  const removeTrailingDots = (data: NumberOrDotArr) => {
    while (data.at(-1) === ".") {
      data.pop();
    }
    return data;
  };

  let pos = 0;
  const dotDiskData = data.split("").reduce<NumberOrDotArr>((acc, el, i) => {
    const isDot = i % 2;
    const fill = isDot ? "." : pos;
    pos = isDot ? pos : pos + 1;
    return [...acc, ...Array(parseInt(el)).fill(fill)];
  }, []);

  const defrag = (arr: NumberOrDotArr) => {
    const findDot = (arr: NumberOrDotArr) => arr.findIndex((el) => el === ".");

    while (findDot(arr) !== -1) {
      arr = removeTrailingDots(arr);
      arr[findDot(arr)] = arr.pop() as number;
    }

    return arr;
  };

  return defrag(dotDiskData);
};

console.log(
  diskDefragmentation(input).reduce<number>(
    (acc, el, i) => acc + (el === "." ? 0 : (el * i)),
    0,
  ),
);

export {};
