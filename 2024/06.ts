import { chunk } from "remeda";

const input = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

const inputArr = input.split("\n").map((el) => el.split(""));

const coordinates = [
	[0, -1],
	[1, 0],
	[0, 1],
	[-1, 0],
]; // x y  - |

const startPosition = inputArr.reduce(
	(acc, row, y) => {
		const check = row.findIndex((el) => el === "^");
		return [check !== -1 ? check : acc[0], check !== -1 ? y : acc[1]];
	},
	[0, 0],
);

let fieldExist = true;
let position = startPosition;
let dirPos = 0;
const fields = [`${startPosition[0]}-${startPosition[1]}`];

while (fieldExist) {
	const dir = coordinates[dirPos % coordinates.length];
	const nextPos = [position[0] + dir[0], position[1] + dir[1]];
	const next = inputArr[nextPos[1]]?.[nextPos[0]];

	if ([".", "^"].includes(next)) {
		fields.push(`${nextPos[0]}-${nextPos[1]}`);
		position = [position[0] + dir[0], position[1] + dir[1]];
	}

	if (next === "#") {
		dirPos++;
	}

	if (!next) {
		fieldExist = false;
	}
}

console.log({ fields, uniqueCount: [...new Set(fields)].length });

// v2, brute force - takes about 6 seconds to run :-(
const temp = input.split("\n");
const lineLength = temp[0].length;
const possibleInputs = temp.join("").split("");

const check = (i: number) => {
	if (possibleInputs[i] !== ".") return 0;

	const inputArr = chunk(possibleInputs.toSpliced(i, 1, "#"), lineLength);

	let fieldExist = true;
	let position = startPosition; // this is the same for all
	let dirPos = 0;
	const fields = [`${startPosition[0]}-${startPosition[1]}`];

	while (fieldExist && fields.length < 7000) {
		const dir = coordinates[dirPos % coordinates.length];
		const nextPos = [position[0] + dir[0], position[1] + dir[1]];
		const next = inputArr[nextPos[1]]?.[nextPos[0]];

		if ([".", "^"].includes(next)) {
			fields.push(`${nextPos[0]}-${nextPos[1]}`);
			position = [position[0] + dir[0], position[1] + dir[1]];
		}

		if (next === "#") {
			dirPos++;
		}

		if (!next) {
			fieldExist = false;
		}
	}

	return fields.length > 6999 ? 1 : 0;
};

console.time("v2");
const nonLooped = possibleInputs.map((_, i) => check(i)).filter(Boolean).length;
console.timeEnd("v2");

console.log({ nonLooped });
