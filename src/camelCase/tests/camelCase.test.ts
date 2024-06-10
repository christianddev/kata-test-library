import { toLowerCamelCase } from "../core/camelCase";

describe("camelCase", () => {
  test("allow empty test", () => {
    expect(toLowerCamelCase("")).toBe("");
  });
  test("Allow title case", () => {
    expect(toLowerCamelCase("Title")).toBe("Title");
  });
  test("Joins words separated by spaces", () => {
    expect(toLowerCamelCase("Words Separated")).toBe("WordsSeparated");
  });
  test("Joins words separated by _", () => {
    expect(toLowerCamelCase("Other-Words_Separated")).toBe("OtherWordsSeparated");
  });
  test("Convert the firsts character of one word into uppercase", () => {
    expect(toLowerCamelCase("other")).toBe("Other");
  });
  test("Convert the firsts character of one word into uppercase", () => {
    expect(toLowerCamelCase("other")).toBe("Other");
  });
  test("Convert the firsts letter of each word to uppercase", () => {
    expect(toLowerCamelCase("other words-separated")).toBe("OtherWordsSeparated");
  });
});