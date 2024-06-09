import { average, sum } from "../stats";
import { averageAsync, sumAsync } from "../statsSync";

describe("Stats", () => {
  describe("Sync", () => {
    test("sum should add numbers", () => {
      const result = sum([1, 2, 3, 4, 5]);

      const expected = 15;
      expect(expected).toBe(result);
    });

    test("average should return the average of numbers", () => {
      const result = average([1, 2, 3, 4, 5]);

      const expected = 3;
      expect(expected).toBe(result);
    });
  });
  describe("Async", () => {
    test("sum should add numbers (async)", async () => {
      const result = await sumAsync([1, 2, 3, 4, 5]);

      const expected = 15;
      expect(expected).toBe(result);
    });

    test("average should return the average of numbers (async)", async () => {
      const result = await averageAsync([1, 2, 3, 4, 5]);

      const expected = 3;
      expect(expected).toBe(result);
    });
  });
});
