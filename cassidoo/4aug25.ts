// Given an array arr representing the positions of monsters along a straight line,
// and an integer d representing the minimum safe distance required between any two monsters,
// write a function to determine if all monsters are at least d units apart.
// If not, return the smallest distance found between any two monsters. If all monsters are safely spaced, return -1.

const minMonsterDistance = (arr: number[], allowedDistance: number): number => {
  const val = arr.reduce((acc, curr, idx) => {
    if (idx === 0) return acc;
    const distance = curr - arr[idx - 1];
    return distance < allowedDistance ? Math.min(acc, distance) : acc;
  }, Infinity);
  return val === Infinity ? -1 : val;
};

// Example usage:
console.log(minMonsterDistance([3, 8, 10, 15], 6)); // Output: 2
console.log(minMonsterDistance([5, 9, 14, 18], 4)); // Output: -1
