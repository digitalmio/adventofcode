import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { majority } from "./11dec23.ts";

Deno.test("Should return set number", () => {
	assertEquals(majority([3, 1, 4, 1]), 1);
});

Deno.test("Should return odd majority", () => {
	assertEquals(majority([33, 44, 55, 66, 77]), "odd");
});

Deno.test("Should return odd majority", () => {
	assertEquals(majority([22, 33, 44, 55, 66, 77, 88]), "even");
});

Deno.test("Should return no majority", () => {
	assertEquals(majority([1, 2, 3, 4]), "no majority");
});
