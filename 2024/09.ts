const input = "2333133121414131402";

const getInputChecksum = (input: string) => {
	let i = 0;
	let numI = 0;
	const type = ["num", "space"];

	const getNumI = () => numI.toString().at(-1) as string;

	const parsedInput = input.split("").reduce((acc, el) => {
		const str = (filler: string) => Array(Number(el)).fill(filler).join("");
		const currentType = type[i % type.length];
		const next = currentType === "num" ? str(getNumI()) : str(".");

		if (currentType === "num") numI++;
		i++;

		return acc + next;
	}, "");

	const optimisedInput = parsedInput.split("").reduce((acc, el, i, arr) => {
		if (el !== ".") {
			acc.push(el);
			return acc;
		}

		const lastNumberIndex = arr.join("").replaceAll(".", " ").trimEnd();
		const num = acc[lastNumberIndex];

		acc.push();
	}, [] as string[]);

	return {
		parsedInput,
	};
};

console.log(getInputChecksum(input));

export {};
