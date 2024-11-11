const seeBuildingsLeft = (input: number[]): number =>
  input.reduce((acc, el) => el > (acc.at(-1) || 0) ? [...acc, el] : acc, [] as number[]).length

console.log(seeBuildingsLeft([1,2,3,4,5]))
console.log(seeBuildingsLeft([5,4,3,2,1]))
console.log(seeBuildingsLeft([3,7,8,3,6,1]))