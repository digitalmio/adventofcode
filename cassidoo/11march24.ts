export const maxGap = (userArr: number[]): number =>
	Math.max(
		0,
		...userArr
			.sort()
			.map((el, i, arr) => arr[i + 1] - el)
			.filter(Boolean),
	);

export const maxGapReduce = (userArr: number[]): number =>
	userArr.sort().reduce((acc, el, i, arr) => {
		const calc = el - arr[i - 1];
		return !isNaN(calc) && calc > acc ? calc : acc;
	}, 0);

console.log(maxGap([3, 6, 9, 1, 2])); // 3
console.log(maxGap([])); // 0
console.log(maxGap([1])); // 0

console.log(maxGapReduce([3, 6, 9, 1, 2])); // 3
console.log(maxGapReduce([])); // 0
console.log(maxGapReduce([1])); // 0
