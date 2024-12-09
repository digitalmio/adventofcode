export const flip = (
	arr: number[][],
	type: "horizontal" | "vertical",
): number[][] => {
	if (type === "vertical") return arr.toReversed();
	return arr.map((el) => el.toReversed());
};
