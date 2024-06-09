import { toLowerCamelCase } from "../core/camelCase";

describe("camelCase", () => {
  test("allow empty test", () => {
    expect(toLowerCamelCase("")).toBe("");
  });
  test("Allow title case", () => {
    expect(toLowerCamelCase("Title")).toBe("Title");
  });
  test("Allow words separated by spaces", () => {
    expect(toLowerCamelCase("Words Separated")).toBe("WordsSeparated");
  });
  test("Allow words separated by _", () => {
    expect(toLowerCamelCase("other-words_Separated")).toBe("OtherWordsSeparated");
  });
});