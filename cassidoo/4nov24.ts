const groupAnagrams = (input: string[]): string[][] =>
  Object.values(
    input.reduce((acc, el) => {
      const key = el.split("").sort().join("");
      acc[key] = [...(acc[key] || []), el];
      return acc;
    }, {})
  );

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams(["vote", "please"]));
// [["vote"],["please"]]

console.log(groupAnagrams(["debitcard", "badcredit"]));
// [["debitcard", "badcredit"]]
