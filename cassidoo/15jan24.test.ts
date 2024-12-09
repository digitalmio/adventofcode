import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { flip } from "./15jan24.ts";

const array = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

Deno.test("Should return set for horizontal", () => {
	assertEquals(flip(array, "horizontal"), [
		[3, 2, 1],
		[6, 5, 4],
		[9, 8, 7],
	]);
});

Deno.test("Should return set for vertical", () => {
	assertEquals(flip(array, "vertical"), [
		[7, 8, 9],
		[4, 5, 6],
		[1, 2, 3],
	]);
});
