import { fizzBuzz } from "../fizzBuzz";

describe("FizzBuzz", () => {
  test("returns number one as a string for number 1", () => {
    const result = fizzBuzz(1);
    const expected = "1";
    expect(expected).toBe(result);
  })
  test("returns number 2 as a string for number 2", () => {
    const result = fizzBuzz(2);
    const expected = "2";
    expect(expected).toBe(result);
  })
  test("returns fizz for number 3", () => {
    const result = fizzBuzz(3);
    const expected = "fizz";
    expect(expected).toBe(result);
  })
  test("returns number 4 as a string for number 4", () => {
    const result = fizzBuzz(4);
    const expected = "4";
    expect(expected).toBe(result);
  })
  test("returns buzz for number 5", () => {
    const result = fizzBuzz(5);
    const expected = "buzz";
    expect(expected).toBe(result);
  })
  test("returns fizzBuzz for number 15", () => {
    const result = fizzBuzz(15);
    const expected = "fizzBuzz";
    expect(expected).toBe(result);
  })
  test("returns fizz for any number divisible by three", () => {
    const result = fizzBuzz(6);
    const expected = "fizz";
    expect(expected).toBe(result);
  })
  test("returns buzz for any number divisible by five", () => {
    const result = fizzBuzz(10);
    const expected = "buzz";
    expect(expected).toBe(result);
  })
  test("returns fizzBuzz for any number divisible by fifteen", () => {
    const result = fizzBuzz(30);
    const expected = "fizzBuzz";
    expect(expected).toBe(result);
  })
  test("returns number as a string for any number not divisible by three of five", () => {
    const result = fizzBuzz(17);
    const expected = "17";
    expect(expected).toBe(result);
  })
});
