// Write a function wrapGifts that finds the maximum number of gifts that can be wrapped using
// a single strip of wrapping paper of a given width. Each gift has a specific length, and you can
// only wrap gifts if their total length fits within the paper width without cutting the paper.

const wrapGifts = (input: number[], limit: number) =>
	input
		.sort((a, b) => Math.abs(b) - Math.abs(a))
		.reduce(
			(acc, el) => {
				const index = acc.findIndex((accEl) => accEl + el <= limit);
				if (index !== -1) acc[index] = acc[index] + el;
				else acc.push(el);
				return acc;
			},
			[0] as number[],
		).length;

console.log(wrapGifts([2, 3, 4, 5], 7));
// 2 -> either gifts 2 and 5, or 3 and 4.

console.log(wrapGifts([1, 1, 1, 1, 1, 1, 1], 3));
// 3

console.log(wrapGifts([1, 2, 3, 4, 5], 6));
// 3 -> 1 and 2 and 3
