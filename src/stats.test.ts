import { average, sum } from "./stats";

const result = sum([1, 2, 3, 4, 5]);

const expected = 15;
if (result === expected) {
  console.log("✅ It works!");
} else {
  throw new Error(`❌ result: ${result} !== expected: ${expected}`);
}

const result2 = average([1, 2, 3, 4, 5]);

const expected2 = 1;
if (result2 === expected2) {
  console.log("✅ It works!");
} else {
  throw new Error(`❌ result: ${result2} !== expected: ${expected2}`);
}
