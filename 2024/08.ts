const input = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`;

// this is part 1 only

const isInRange = (start: number, end: number, check: number) =>
	Boolean(check <= end && check >= start);

const findAntinodes = (input: string) => {
	const grid = input.split("\n").map((line) => line.split(""));
	const rows = grid.length - 1; // need this zero-indexed
	const cols = grid[0].length - 1; // same zero-index

	const generateAntinodePos = (
		pos: [number, number],
		diff: [number, number],
	) => {
		const antinodeY = pos[0] + diff[0];
		const antinodeX = pos[1] + diff[1];

		return isInRange(0, cols, antinodeX) && isInRange(0, rows, antinodeY)
			? `${antinodeY},${antinodeX}`
			: null;
	};

	// Find all antennas, returns row, col
	const antennas = grid.reduce(
		(acc, row, rowI) => {
			row.forEach((el, i) => {
				if (el !== ".") {
					acc[el] = [...(acc[el] || []), [rowI, i]];
				}
			});
			return acc;
		},
		{} as Record<string, Array<[number, number]>>,
	);

	const antinodes = [
		...new Set(
			Object.keys(antennas)
				.flatMap((antennaGroupName) => {
					return antennas[antennaGroupName].flatMap((antenna, i, groupArr) => {
						return groupArr.flatMap((a, ai) => {
							if (i === ai) {
								return null;
							}

							const diffY = antenna[0] - a[0]; // rows
							const diffX = antenna[1] - a[1]; // cols

							return generateAntinodePos(antenna, [diffY, diffX]);
						});
					});
				})
				.filter(Boolean),
		),
	];

	return {
		antinodes,
		antinodesCount: antinodes.length,
	};
};

console.log(findAntinodes(input));
