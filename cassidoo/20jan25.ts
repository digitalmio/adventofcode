const longestSubsequence = (input: number[]) => {
  let max = 1;
  [1, -1].forEach((calc) =>
    input.reduce<number>((acc, el, i, arr) => {
      if (arr[i + 1] && el + calc === arr[i + 1]) {
        acc = acc + 1;
        max = Math.max(max, acc);
      } else {
        acc = 1;
      }
      return acc;
    }, 1)
  );
  return max;
};

console.log(longestSubsequence([1, 2, 3, 4, 5]));
// 5
console.log(longestSubsequence([4, 2, 3, 1, 5]));
// 2
console.log(longestSubsequence([10, 11, 7, 8, 9, 12]));
// 3
console.log(longestSubsequence([10, 9, 8, 7, 6, 5, 7, 8, 9, 12]));
// 6
