export const majority = (data: number[]): number | string => {
  const result = data
    .sort((a, b) => a - b)
    .reduce(
      (acc, el) => {
        if (acc.primary.current.key === el) {
          acc.primary.current.count += 1;
        } else {
          acc.primary.current = {
            count: 1,
            key: el,
          };
        }

        if (acc.primary.current.count === acc.primary.max.count) {
          acc.primary.max.key = [...acc.primary.max.key, el];
        } else if (acc.primary.current.count > acc.primary.max.count) {
          acc.primary.max = {
            key: [acc.primary.current.key],
            count: acc.primary.current.count,
          };
        }

        const evenOrOdd = el % 2 === 0 ? "even" : "odd";
        acc.secondary[evenOrOdd] += 1;

        return acc;
      },
      {
        primary: {
          max: { count: 0, key: [0] },
          current: { count: 0, key: 0 },
        },
        secondary: { even: 0, odd: 0 },
      } as {
        primary: {
          max: { count: number; key: number[] };
          current: { count: number; key: number };
        };
        secondary: { even: number; odd: number };
      }
    );

  if (result.primary.max.key.length === 1) {
    return result.primary.max.key[0];
  }

  if (result.secondary.even === result.secondary.odd) return "no majority";

  return result.secondary.even > result.secondary.odd ? "even" : "odd";
};
