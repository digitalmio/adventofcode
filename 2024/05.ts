const input = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

const inputGroups = input.split("\n\n").map((gr) => gr.split("\n"));

const [rules, data] = inputGroups.map((groups, i) =>
	groups.map((el) =>
		el.split(i === 0 ? "|" : ",").map((s) => Number.parseInt(s)),
	),
);

const countVal1 = (page: number[]): number => {
	const activeRules = rules.filter((r) =>
		r.every((rEntry) => page.includes(rEntry)),
	);

	return activeRules.every((el) => page.indexOf(el[0]) < page.indexOf(el[1]))
		? page[Math.floor(page.length / 2)]
		: 0;
};

const result1 = data.reduce((acc, page) => {
	return acc + countVal1(page);
}, 0);

// ---------------------------------------------

const swapPlaces = (rule: number[], data: number[]) => {
	const pos1 = data.indexOf(rule[0]);
	const pos2 = data.indexOf(rule[1]);

	const temp = data[pos1];
	data[pos1] = data[pos2];
	data[pos2] = temp;

	return data;
};

const filterBrokenOnes = (page: number[]): boolean =>
	!rules
		.filter((r) => r.every((rEntry) => page.includes(rEntry)))
		.every((el) => page.indexOf(el[0]) < page.indexOf(el[1]));

const countVal2 = (page: number[]): number => {
	const activeRules = rules.filter((r) =>
		r.every((rEntry) => page.includes(rEntry)),
	);

	if (activeRules.every((el) => page.indexOf(el[0]) < page.indexOf(el[1]))) {
		return page[Math.floor(page.length / 2)];
	}

	return countVal2(
		activeRules.reduce((_, el) => {
			if (page.indexOf(el[0]) < page.indexOf(el[1])) {
				return page;
			}

			return swapPlaces(el, page);
		}, page),
	);
};

const result2 = data.filter(filterBrokenOnes).reduce((acc, page) => {
	return acc + countVal2(page);
}, 0);

console.log({ result1, result2 });

export {};
