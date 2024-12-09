export const wordLengthProduct = (input: string[]): number =>
	input
		.map((inputEl, i) => {
			const unique = input
				.filter(
					(el, ii) =>
						i !== ii && inputEl.split("").every((val) => !el.includes(val)),
				)
				.sort((a, b) => b.length - a.length);

			return unique.length ? unique[0].length * inputEl.length : 0;
		})
		.sort()
		.at(-1) || 0;

console.log(
	wordLengthProduct(["fish", "fear", "boo", "egg", "cake", "abcdef"]), // 16
);

console.log(wordLengthProduct(["a", "aa", "aaa", "aaaa"])); // 0
