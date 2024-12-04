const dataInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const inputArr = dataInput.split("\n").map((el) => el.split(""));

const findXmas = (x: number, y: number) => {
	const word = ["M", "A", "S"];
	const checks = {
		top: [
			{ x: 0, y: -1 },
			{ x: 0, y: -2 },
			{ x: 0, y: -3 },
		],
		bottom: [
			{ x: 0, y: 1 },
			{ x: 0, y: 2 },
			{ x: 0, y: 3 },
		],
		left: [
			{ x: -1, y: 0 },
			{ x: -2, y: 0 },
			{ x: -3, y: 0 },
		],
		right: [
			{ x: 1, y: 0 },
			{ x: 2, y: 0 },
			{ x: 3, y: 0 },
		],
		dtl: [
			{ x: -1, y: 1 },
			{ x: -2, y: 2 },
			{ x: -3, y: 3 },
		],
		dtr: [
			{ x: 1, y: 1 },
			{ x: 2, y: 2 },
			{ x: 3, y: 3 },
		],
		dbl: [
			{ x: -1, y: -1 },
			{ x: -2, y: -2 },
			{ x: -3, y: -3 },
		],
		dbr: [
			{ x: 1, y: -1 },
			{ x: 2, y: -2 },
			{ x: 3, y: -3 },
		],
	};

	if (inputArr[y][x] === "X") {
		return Object.keys(checks).reduce((acc, direction) => {
			const foundXmas = checks[direction].every(
				(dirData, i) => inputArr[y + dirData.y]?.[x + dirData.x] === word[i],
			);
			return acc + (foundXmas ? 1 : 0);
		}, 0);
	}

	return 0;
};

const count = inputArr
	.map((row, y) => row.map((col, x) => findXmas(x, y)))
	.reduce((rowAcc, row) => rowAcc + row.reduce((acc, el) => acc + el, 0), 0);

// ---------------------------------------

const findXmas2 = (x: number, y: number): number => {
	const checks = [
		[
			{ letter: "M", x: -1, y: 1 },
			{ letter: "M", x: -1, y: -1 },
			{ letter: "S", x: 1, y: 1 },
			{ letter: "S", x: 1, y: -1 },
		],
		[
			{ letter: "M", x: -1, y: 1 },
			{ letter: "S", x: -1, y: -1 },
			{ letter: "M", x: 1, y: 1 },
			{ letter: "S", x: 1, y: -1 },
		],
		[
			{ letter: "S", x: -1, y: 1 },
			{ letter: "M", x: -1, y: -1 },
			{ letter: "S", x: 1, y: 1 },
			{ letter: "M", x: 1, y: -1 },
		],
		[
			{ letter: "S", x: -1, y: 1 },
			{ letter: "S", x: -1, y: -1 },
			{ letter: "M", x: 1, y: 1 },
			{ letter: "M", x: 1, y: -1 },
		],
	];

	if (inputArr[y][x] === "A") {
		const foundXmas = checks.some((el) =>
			el.every(
				(dirData) =>
					inputArr[y + dirData.y]?.[x + dirData.x] === dirData.letter,
			),
		);

		return Number(foundXmas);
	}

	return 0;
};

const count2 = inputArr
	.map((row, y) => row.map((_, x) => findXmas2(x, y)))
	.reduce((rowAcc, row) => rowAcc + row.reduce((acc, el) => acc + el, 0), 0);

console.log({ count, count2 });

export {};
